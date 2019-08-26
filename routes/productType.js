const ProductType = require('../models/productType')

exports.get = async (ctx) => {
  const id = ctx.params.id
  const productType = await ProductType.findById(id)
  ctx.assert(productType, 404, '设备类型不存在')

  ctx.body = productType
}

exports.list = async (ctx) => {
  const list = await ProductType.find()
  ctx.body = list
}