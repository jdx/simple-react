'use strict'

const koa = require('koa')
const send = require('koa-send')
const path = require('path')
const app = koa()

app.use(require('koa-logger')())
app.use(require('koa-static')('public'))

app.use(function * () {
  yield send(this, path.join('public', 'index.html'))
})

app.listen(process.env.PORT || 3000)
