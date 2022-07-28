const express = require('express');
const signup = require('./signup');
const signin = require('./signin');
const auth = require('../middlewares/auth');
const users = require('./users');
const movies = require('./movies');

const routers = express();

routers.use(signup);
routers.use(signin);
routers.use(auth);
routers.use(users);
routers.use(movies);

module.exports = routers;
