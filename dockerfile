FROM node:10

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 443

CMD ["node", "server.js"]