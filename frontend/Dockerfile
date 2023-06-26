# 基本環境
FROM node:16 AS main

WORKDIR /app/frontend

COPY package.json yarn.lock ./
RUN yarn install --production=false --frozen-lockfile
