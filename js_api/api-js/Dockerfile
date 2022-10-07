FROM node:alpine

WORKDIR /api-js

COPY package.json /api-js

RUN npm install

COPY . /api-js

CMD node index.js

EXPOSE 3040