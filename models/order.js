const mongoose = require('mongoose');

const Order = mongoose.Schema(
  {
    buyerName: {
      type: String,
      index: true
    },
    buyerAddress: {
      type: String,
      require: true
    },
    buyerPhone: {
      type: String,
      require: true,
      index: true
    },
    payStatus: {
      type: Number,
      default: 0,
      index: true
    },
    products: {
      type: Array,
      default: []
    },
    totalAmount: {
      type: Number,
      require: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Order', Order);