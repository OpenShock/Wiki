FROM squidfunk/mkdocs-material:latest AS build

WORKDIR /docs

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

RUN mkdocs build

FROM nginx:1-alpine AS runtime

EXPOSE 80

# Copy release artifacts (static HTML, JS, CSS)
COPY --from=build /docs/site /usr/share/nginx/html

# Leave startup as-is.
