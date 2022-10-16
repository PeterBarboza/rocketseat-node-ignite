FROM node:16-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /usr/app/wait
RUN chmod +x /wait

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE ${PORT}

CMD ./wait && npm run dev