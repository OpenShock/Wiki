FROM python:3.12-alpine
COPY site /site
WORKDIR /site
RUN pip install mkdocs
EXPOSE 80
ENTRYPOINT [ "sh", "-c", "mkdocs serve --clean -a 0.0.0.0:80 --no-livereload" ]
