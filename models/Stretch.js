const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StretchSchema = new Schema({
  name: {type: String, required: true},
  area: {type: String, required: false},
  description: {type: Array, required: false},
  image: {type: String, required: false}
});

module.exports = Stretch = mongoose.model('stretch', StretchSchema);