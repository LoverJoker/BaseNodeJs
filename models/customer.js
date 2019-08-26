const mongoose = require('mongoose');

const Customer = mongoose.Schema(
  {
    name: {
      type: String,
      index: true
    },
    openId: {
      type: String,
      index: true
    },
    phone: {
      type: String,
      index: true
    },
    integral: {
      type: Number,
      default: 0
    },
    remarks: {
      type: String
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Customer', Customer);