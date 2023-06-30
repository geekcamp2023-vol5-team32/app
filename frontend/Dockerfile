# 開発環境
FROM node:16 AS dev

WORKDIR /app/frontend

COPY package.json yarn.lock ./
RUN yarn install --production=false --frozen-lockfile
