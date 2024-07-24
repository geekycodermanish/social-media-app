const sequelize = require('../config/db');
const User = require('./user');
const Post = require('./post');
const Like = require('./like');
const Follow = require('./follow');

// Associations
User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Like);
Like.belongsTo(Post);



User.belongsToMany(Post, { through: Like, as: 'LikedPosts' });
Post.belongsToMany(User, { through: Like, as: 'Likers' });


User.belongsToMany(User, { through: Follow, as: 'Followers', foreignKey: 'followedId' });
User.belongsToMany(User, { through: Follow, as: 'Following', foreignKey: 'followerId' });



sequelize.sync();

module.exports = { User, Post, Like, Follow };
