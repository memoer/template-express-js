FROM node:12.18.3-alpine

RUN apk add --update --no-cache netcat-openbsd

WORKDIR /app

COPY . .

RUN node -v && npm install

RUN chmod 755 docker/dev/wait-for