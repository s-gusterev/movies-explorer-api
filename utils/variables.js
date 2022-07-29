const { PORT = 3000, BASE_URL, NODE_ENV } = process.env;

const patternUrl = /^((http|https):\/\/)?(www\.)?([A-Za-zА0-9]{1}[A-Za-zА0-9-]*\.?)*\.{1}[A-Za-zА0-9-]{2,}(\/([\w#!:.?+=&%@!\-/])*)?/;

module.exports = {
  PORT, BASE_URL, NODE_ENV, patternUrl,
};
