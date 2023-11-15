FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./backend/package*.json ./

RUN npm install

COPY ./backend/. .

RUN npm run build

RUN mkdir -p ssl

EXPOSE 3000

CMD ["npm", "start"]
