const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("db_crud","sarvadhisolution","",{
    host:"localhost",
    port:5432,
    dialect:"postgres",
    logging: false
})

module.exports = sequelize