const mongoose = require('mongoose');

const ProductType = mongoose.Schema(
  {
    name: {
      type: String,
      index: true
    },
    remarks: {
      type: String
    },

  },
  { timestamps: true }
)

module.exports = mongoose.model('ProductType', ProductType);