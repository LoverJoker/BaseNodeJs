const Product = require('../models/product')

exports.get = async (ctx) => {
  let productId = ctx.params.productId;
  const product = await Product.findById(productId)
  ctx.assert(product, 404, '商品不存在')
  ctx.body = product
}

exports.list = async (ctx) => {
  console.log(ctx.session.userId)
  console.log(ctx.session)
  const list = await Product.find()
  ctx.body = list
}