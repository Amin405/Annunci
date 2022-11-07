const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  description: String,
  owner: String,
  price: Number,
  offer: String,

  filename: {
    type: String,
  },
  fileId: {
    type: String,
  },
  createdAt: {
    default: Date.now(),
    type: Date,
  },
});

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
