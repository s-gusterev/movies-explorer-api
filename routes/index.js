const express = require('express');
const signup = require('./signup');
const signin = require('./signin');
const auth = require('../middlewares/auth');
const users = require('./users');
const movies = require('./movies');
const notfound = require('../middlewares/notfound');

const routers = express();

routers.use(signup);
routers.use(signin);
routers.use(auth);
routers.use(users);
routers.use(movies);
routers.use(notfound);

module.exports = routers;
