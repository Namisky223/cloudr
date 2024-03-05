const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
  editeur: {
    type: String,
    required: true
  },
  auther: {
    type: String,
    required: true
  },  
  livre: {
    type: number,
    required: true
  },
});

module.exports = mongoose.model('Publisher', publisherSchema);