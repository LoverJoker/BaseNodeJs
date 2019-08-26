const router = require('koa-router')()
const Product = require('./product')
const ProductType = require('./productType')
const Order = require('./order')
const Session = require('./session')
const User = require('./user')
const Test = require('./test')

const roles = require('../utils/roles');

require('../models')

// 角色
// 匿名角色
const ANONYMITY_ROLES = roles([
  'ROLE_ANONYMITY'
])
// 最高权限角色
const ROLE_OWNER_ADMIN = roles([
  'ROLE_OWNER_ADMIN'
])

router.get('/test', Test.get)

// session
router.post('/session', Session.login)
router.get('/user/:userId', ROLE_OWNER_ADMIN, User.get)

// product
router.get('/product/:productId', ROLE_OWNER_ADMIN, Product.get)
router.get('/product', ROLE_OWNER_ADMIN, Product.list)

// productType
router.get('/productType/:id', ProductType.get)
router.get('/productType', ProductType.list)

// order
router.get('/order/:id', Order.get)
router.get('/order', Order.list)

module.exports = router
