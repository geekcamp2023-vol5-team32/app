# ベース環境
FROM python:3.10-slim AS base

WORKDIR /app/backend

RUN apt-get update && apt-get install -y \
      wget \
      xz-utils

RUN wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz

RUN  tar Jxvf ./ffmpeg-release-amd64-static.tar.xz \
  && mv ./ffmpeg*amd64-static/ffmpeg /usr/local/bin/ \
  && mv ./ffmpeg*amd64-static/ffprobe /usr/local/bin/ \
  && rm -rf /ffmpeg*amd64-static

COPY requirements.txt ./
RUN pip install -r requirements.txt


# 開発環境
FROM python:3.10 AS dev

COPY --from=base /usr/local/lib/python3.10/site-packages /usr/local/lib/python3.10/site-packages
COPY --from=base /usr/local/bin /usr/local/bin

WORKDIR /app/backend
ENV FLASK_APP=app


# 本番環境
FROM python:3.10-slim AS prod

COPY --from=base /usr/local/lib/python3.10/site-packages /usr/local/lib/python3.10/site-packages
COPY --from=base /usr/local/bin /usr/local/bin

WORKDIR /app/backend
COPY src ./src

WORKDIR /app/backend/src

ENV PORT=5000
CMD exec gunicorn --bind :$PORT app:app --log-level debug
