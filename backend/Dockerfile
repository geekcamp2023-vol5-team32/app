# 開発環境
FROM python:3.10 AS dev

WORKDIR /app/backend

RUN apt-get update && apt-get install -y \
      wget \
      xz-utils

RUN wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz

RUN  tar Jxvf ./ffmpeg-release-amd64-static.tar.xz \
  && mv ./ffmpeg*amd64-static/ffmpeg /usr/local/bin/ \
  && rm -rf /ffmpeg*amd64-static

COPY requirements.txt ./
RUN pip install -r requirements.txt

ENV FLASK_APP=src.app


# 本番環境
FROM python:3.10-slim AS prod

WORKDIR /app/backend

RUN apt-get update && apt-get install -y \
      wget \
      xz-utils

RUN wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz

RUN  tar Jxvf ./ffmpeg-release-amd64-static.tar.xz \
  && mv ./ffmpeg*amd64-static/ffmpeg /usr/local/bin/ \
  && rm -rf /ffmpeg*amd64-static

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY src ./src
WORKDIR /app/backend/src

ENV PORT=5000
CMD exec gunicorn --bind :$PORT app:app --log-level debug
