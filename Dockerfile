ARG NODE_VERSION=24.6.0
ARG PNPM_VERSION=10.26.1
ARG ALPINE_VERSION=3.22

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS build

ARG PNPM_VERSION

WORKDIR /docs

RUN apk add --no-cache git
RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/download/v${PNPM_VERSION}/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm

COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install --frozen-lockfile --strict-peer-dependencies

COPY . .
RUN pnpm run build

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS runtime

EXPOSE 80

# Copy release artifacts (static HTML, JS, CSS)
COPY --from=build /docs/docs/.vitepress/dist /usr/share/nginx/html

# Leave startup as-is.
