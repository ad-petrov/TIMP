const {Product, Promo, Order} = require('../models/models')
class OrderController {
    async order(req, res) {
        const {id, username, email, phone, adress, promo} = req.body
        console.log(promo)
        const code = await Promo.findOne({where : {promo}})
        if (code) {
            console.log(code.discount)
            let discount = code.discount / 100
            console.log(discount)
            const new_product = await Product.findOne({where: {id: id}})
            if(new_product){
            let price_tmp = Math.round(new_product.price * (1 - discount))
            console.log(price_tmp)
            const price = price_tmp
            const name = new_product.name
            const order = await Order.create({name, price, username, email, phone, adress})

            res.status(200)
            res.json('Ok')
            }
            else {
                res.status(200)
                res.json('Wrong id')
            }
        }
        else {
            console.log('Not Ok')
            res.json('Not correct promocode')
        }
    }
    async test(req, res){
        const {promo} = req.query
        res.json({'ss': promo})
    }
}

module.exports = new OrderController()