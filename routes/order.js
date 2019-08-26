const Order = require('../models/order')

exports.get = async (ctx) => {
  let id = ctx.params.id;
  const order = await Order.findById(id)
  ctx.assert(order, 404, '订单不存在')
  ctx.body = order
}

exports.list = async (ctx) => {
  const list = await Order.find()
  ctx.body = list
}