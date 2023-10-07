FROM python:3.12-alpine
COPY site /site
COPY requirements.txt /requirements.txt
COPY mkdocs.yml /site/mkdocs.yml
WORKDIR /site
RUN pip install -r /requirements.txt
EXPOSE 80
ENTRYPOINT [ "sh", "-c", "mkdocs serve --clean -a 0.0.0.0:80 --no-livereload" ]
