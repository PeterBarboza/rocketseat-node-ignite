FROM node:16-alpine

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE ${PORT}

CMD npm run dev