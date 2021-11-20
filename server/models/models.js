const sequelize = require('../db')

const {DataTypes} = require('sequelize')

const Product = sequelize.define('products',{
    //id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER}
})

const Promo= sequelize.define('promos',{
    //id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    promo: {type: DataTypes.STRING},
    discount: {type: DataTypes.INTEGER}

})

const Order= sequelize.define('orders',{
    //id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    username: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    adress: {type: DataTypes.STRING}
})

module.exports = {
    Product,
    Promo,
    Order
}
