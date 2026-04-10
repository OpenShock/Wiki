ARG NODE_VERSION=24.6.0
ARG PNPM_VERSION=10.26.1
ARG ALPINE_VERSION=3.22

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS deps

ARG PNPM_VERSION

WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN ARCH=$(uname -m) && \
    case "$ARCH" in \
      x86_64) PNPM_ARCH="x64" ;; \
      aarch64) PNPM_ARCH="arm64" ;; \
      *) echo "Unsupported architecture: $ARCH" && exit 1 ;; \
    esac && \
    wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/download/v${PNPM_VERSION}/pnpm-linuxstatic-${PNPM_ARCH}" && chmod +x /bin/pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS build

ARG PNPM_VERSION

WORKDIR /app

RUN ARCH=$(uname -m) && \
    case "$ARCH" in \
      x86_64) PNPM_ARCH="x64" ;; \
      aarch64) PNPM_ARCH="arm64" ;; \
      *) echo "Unsupported architecture: $ARCH" && exit 1 ;; \
    esac && \
    wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/download/v${PNPM_VERSION}/pnpm-linuxstatic-${PNPM_ARCH}" && chmod +x /bin/pnpm

COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=80
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Next.js standalone output bundles a minimal server
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 80

CMD ["node", "server.js"]
