FROM nginx:1-alpine

# Copy release artifacts (static HTML, JS, CSS)
COPY site /usr/share/nginx/html

# Leave startup as-is.
