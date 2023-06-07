const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define('adm1', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
