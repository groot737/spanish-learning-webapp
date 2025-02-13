const mongoose = require('mongoose');

const wordsSchema = new mongoose.Schema({
  word: String,
  definition: String,
});

const Words = mongoose.model('Words', wordsSchema);

module.exports = Words; 