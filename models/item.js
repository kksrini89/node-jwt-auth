const mongoose = require('mongoose');
const schema = mongoose.Schema;

const itemSchema = new schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('Item', itemSchema);
