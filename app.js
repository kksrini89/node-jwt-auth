const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// After all above middleware, configure custom routes
app.use('/', routes);

module.exports = app;
