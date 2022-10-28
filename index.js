const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5001;

const {
  testRouter
} = require('./src/routers');

const app = express();

app.use(bodyParser.json({ limit: '5mb' }));

const server = http.createServer(app);

app.use(testRouter);

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
