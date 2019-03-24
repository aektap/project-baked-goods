'use strict';

const express = require('express');
const	router = require('./router');
const ejs = require('ejs');

const app = express();

app.use(router);
app.set('view engine', 'ejs');

app.listen(3000, () => {
console.log('server is running');
});
