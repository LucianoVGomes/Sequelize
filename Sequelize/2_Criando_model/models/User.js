const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('User', {     // O método define  "Vai definir o model"
        name: {
            type: DataTypes.STRING,
            allowNull: false      // para não ter um número nulo.
        },
        occupation: {
            type: DataTypes.STRING,
            required: true            // Required > true 'Não aceita nada que esteja vazio'
        },
        newsletter: {
            type: DataTypes.BOOLEAN,  
        }, 
})  

module.exports = User