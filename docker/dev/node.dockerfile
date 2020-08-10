FROM node:lts

WORKDIR /app

COPY . .

RUN node -v && pwd && ls -la && npm install