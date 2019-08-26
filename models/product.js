const mongoose = require('mongoose');

const Product = mongoose.Schema(
  {
    name: {
      type: String,
      index: true
    },
    typeId: {
      type: mongoose.Schema.Types.ObjectId,
      index: true
    },
    price: {
      type: Number,
      require: true
    },
    size: {
      type: String
    },
    remarks: {
      type: String
    },
    imgUrl: {
      type: String
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', Product);