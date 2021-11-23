const Router = require('express')

const router = new Router()
const orderRouter = require('./order_route')

router.use('/order', orderRouter)


module.exports = router