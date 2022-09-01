# syntax=docker/dockerfile:1

FROM node:12-alpine

WORKDIR /

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 443

CMD ["node", "server.js"]