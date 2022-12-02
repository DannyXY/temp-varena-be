FROM node:16.10.0-alpine

WORKDIR /backend

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "start"]
