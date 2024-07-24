const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Post = sequelize.define('Post', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Post;
