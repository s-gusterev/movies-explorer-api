const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { PORT, BASE_URL, NODE_ENV } = require('./utils/variables');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(NODE_ENV === 'production' ? BASE_URL : BASE_URL);

console.log(BASE_URL);

app.listen(PORT, () => { console.log(`Сервер работает на порту ${PORT}`); });
