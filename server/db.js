const {Sequelize} = require('sequelize')
const {ignoreRoot} = require("nodemon/lib/config/defaults");

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.USER,
    process.env.DB_PASSWORD,
    {
        dialect:'postgres',
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        define:{
            timestamps: false,
            createdAt: false,
            updatedAt: false
        }
    }
)
