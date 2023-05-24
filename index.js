const express = require('express');
const app = express();
const serverless = require('serverless-http');

// We'll use the public directory to serve the Vue App
app.use(express.static('public'));


module.exports.handler = serverless(app);