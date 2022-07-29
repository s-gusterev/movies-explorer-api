const NotFoundError = require('../errors/NotFoundError');

const notFound = ((req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = notFound;
