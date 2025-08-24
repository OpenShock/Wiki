FROM node:20 AS build

WORKDIR /docs

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run docs:build

FROM nginx:1-alpine AS runtime

EXPOSE 80

# Copy release artifacts (static HTML, JS, CSS)
COPY --from=build /docs/docs/.vitepress/dist /usr/share/nginx/html

# Leave startup as-is.
