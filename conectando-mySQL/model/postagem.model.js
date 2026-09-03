const { DataTypes } = require("sequelize")
const sequelize = require('../config/database'); 

const Postagem = sequelize.define('Postagem', {
    titulo: {
        type: DataTypes.STRING(45), 
        allowNull: false
    }, 
    descricao: {
        type: DataTypes.TEXT, 
        allowNull: false
    }
}, 
{
    tableName: 'postagem'
}
); 

module.exports = Postagem; 