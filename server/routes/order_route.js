const  Router = require('express')

const router = new Router()
const orderContoller = require('../controlles/orderController')

router.post('/order', orderContoller.order)
router.get('/test', orderContoller.test)

module.exports = router