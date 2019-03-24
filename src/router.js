'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('get');
});

// register
router.get('/register', (req, res) => {
  res.send('REGISTER');
});

// login
router.get('/login', (req, res) => {
  res.send('GET');
});


// getting products, update, delete
router.get('/product', (req, res) => {
  res.send('GET');
});


router.post('/item', (req, res) => {
  res.send('POST');
});

router.put('/item/:id', (req, res) => {
  res.send('PUT');
});

router.delete('/item/:id', (req, res) => {
  res.send('DELETE');
});


module.exports = router;
