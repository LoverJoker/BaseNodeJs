const ProductType = require('../models/productType')

const Customer = require('../models/customer')


const Order = require('../models/order')

exports.get = async (ctx) => {
  const product = new ProductType({
    name: 'joker'
  })
  product.save()

  const order = new Order({
    buyerAddress: '123',
    totalAmount: 123,
    buyerPhone: '1123'
  })
  order.save()

  const customer = new Customer({
    name: 'joker'
  })

  customer.save()
}