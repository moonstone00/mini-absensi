const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('absensi_mahasiswa', 'root', '', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3308, // Ganti dengan port MySQL yang Anda gunakan
});

module.exports = sequelize;