FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./backend/package*.json ./

RUN mkdir -p ssl

RUN npm install

COPY ./backend/. .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
