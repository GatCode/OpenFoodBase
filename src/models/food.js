const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  serving: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  protein: {
    type: Number,
    required: true
  },
  carbs: {
    type: Number,
    required: true
  },
  fat: {
    type: Number,
    required: true
  },
  barcode: {
      type: Number,
      required: false
  },
  image: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Food', foodSchema);
