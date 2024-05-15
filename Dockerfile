FROM node:hydrogen

WORKDIR /usr/src/app

COPY package*.json .
RUN npm ci

COPY . .

RUN apt install ca-certificates -y


EXPOSE ${NODE_PORT}

CMD ["npm", "start"]