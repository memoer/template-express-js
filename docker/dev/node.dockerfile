FROM node:12.18.3-alpine

WORKDIR /app

COPY . .

RUN node -v && npm install
RUN apk add --update --no-cache netcat-openbsd && chmod 755 docker/dev/wait-for