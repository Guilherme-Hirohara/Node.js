const {Sequelize} = require('sequelize')


const sequelize = new Sequelize(
    'meu_banco', 'root', '230606280706', 
    {
        host: 'localhost', 
        dialect: 'mysql'
    }
); 

module.exports = sequelize; 