FROM node:18-alpine3.16

WORKDIR /app

COPY books-server/package*.json ./books-server/

WORKDIR /app/books-server

RUN npm install

COPY books-server/ .

RUN npm run build

WORKDIR /app

COPY my-books/package*.json ./my-books/
WORKDIR /app/my-books
RUN npm install

COPY my-books/ .

RUN npm run build

WORKDIR /app/books-server

CMD ["npm", "run", "start:prod"]