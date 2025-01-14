const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db.config')

class Absensi extends Model { }

Absensi.init({
    users_nim: DataTypes.INTEGER,
    status: DataTypes.ENUM('in', 'out')
}, {
    sequelize,
    modelName: 'Absensi'
})

module.exports = Absensi