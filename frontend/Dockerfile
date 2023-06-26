# 開発環境
FROM node:16 AS dev

WORKDIR /app/frontend

COPY package.json yarn.lock ./
RUN yarn install --production=false --frozen-lockfile

ENV NODE_ENV development


# 本番環境
FROM node:16 AS prod

WORKDIR /app/frontend

COPY package.json yarn.lock ./
RUN yarn install --production=true --frozen-lockfile

ENV NODE_ENV production
