# 開発環境
FROM python:3.10 AS dev

WORKDIR /app/backend

COPY requirements.txt ./
RUN pip install -r requirements.txt

ENV FLASK_APP=src.app


# 本番環境
FROM python:3.10-slim AS prod

WORKDIR /app/backend

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY src ./src
WORKDIR /app/backend/src

ENV PORT=5000
CMD exec gunicorn --bind :$PORT src.app:app --log-level debug
