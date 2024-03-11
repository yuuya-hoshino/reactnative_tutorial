FROM node:21.7.0-slim AS base

SHELL [ "/bin/bash", "-c" ]
EXPOSE 8081 19000 19001 19002 19006

RUN npm install -g npm@latest

RUN yarn global add expo-cli

FROM base AS dev

WORKDIR /var/app