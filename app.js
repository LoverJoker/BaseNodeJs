const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')

const cors = require('kcors');
const koaBody = require('koa-body');

// error handler
 

// middlewares
 
app.use(json())
app.use(logger())
app.use(cors())
app.use(koaBody({ multipart: true }))
app.use(require('koa-static')(__dirname + '/public'))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
// app.on('error', (err, ctx) => {
//   console.log('~~~~~~~~~~~~~')
//   ctx.body = {
//     text: '错误了'
//   }
// });

module.exports = app
