const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("db_jewellery","sarvadhisolution","",{
    host:"localhost",
    port:5432,
    dialect:"postgres",
    logging: console.log
})

module.exports = sequelize