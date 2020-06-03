'use strict'

const http = require('http');

const port = (process.env.PORT || 5000)

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify({
    name: 'Covid-Puc',
    ver: '0.0.1'
  }))
  res.end()
}).listen(port)

// const express = require("express");


// const app = express();

// app.listen(process.env.PORT || 443);

// 2020-06-03T01:16:22.583353+00:00 