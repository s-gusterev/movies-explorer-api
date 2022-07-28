const { PORT = 3000, BASE_URL = 'mongodb://localhost:27017/moviesdb' } = process.env;

module.exports = {
  PORT, BASE_URL,
};
