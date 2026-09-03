const {DataTypes} = require('sequelize'); 
const sequelize = require('../config/database'); 

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING(50), 
        allowNull: false
    }, 
    sobrenome: {
        type: DataTypes.STRING(50), 
        allowNull: false
    }, 
    idade: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }
}, 
{
    tableName: 'usuarios'
}
); 

module.exports = Usuario; 

