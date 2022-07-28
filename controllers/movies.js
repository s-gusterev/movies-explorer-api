const Movie = require('../models/movie');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

const saveMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((movie) => { res.json(movie); })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные при создании карточки');
      } else {
        next(err);
      }
    })
    .catch(next);
};

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => { res.json(movies); })
    .catch((err) => { next(err); });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Фильм с указанным id не найден');
      }
      if (movie.owner.toString() === req.user._id) {
        return Movie.findByIdAndDelete(req.params._id)
          .then(() => {
            res.json({ message: 'Фильм успешно удален' });
          });
      }
      throw new ForbiddenError('Невозможно удалить фильм другого пользователя');
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Некорректно указан id фильма');
      }
      next(err);
    })
    .catch(next);
};

module.exports = { getMovies, saveMovie, deleteMovie };
