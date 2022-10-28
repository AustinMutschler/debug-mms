FROM node:18.12.0-bullseye-slim

ENV PORT=5001

ENV NODE_ENV=development

# libcurl4 is used for mongodb-memory-server and is required for the tests to run
RUN apt-get update && apt-get install nano git bash openssl musl curl libaio1 wget unzip libcurl4 -y

WORKDIR /usr/share/backend-server

# We do this to cut back on duplicate dependencies
COPY ./package.json .
RUN yarn install

COPY . .

CMD ["yarn", "start"]