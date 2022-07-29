const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getMovies, saveMovie, deleteMovie } = require('../controllers/movies');
const { patternUrl } = require('../utils/variables');

router.get('/movies', getMovies);
router.post('/movies', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(patternUrl),
    trailerLink: Joi.string().required().regex(patternUrl),
    thumbnail: Joi.string().required().regex(patternUrl),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), saveMovie);

router.delete('/movies/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().hex().length(24),
  }),
}), deleteMovie);

module.exports = router;
