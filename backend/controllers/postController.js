const { Post, User, Like } = require('../models');
const { ValidationError } = require('sequelize');
const { Sequelize } = require('sequelize');

exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }

    const post = await Post.create({ content, UserId: req.user.id });
    res.status(201).json(post);
  } catch (error) {
    if (error instanceof ValidationError) {
      const validationErrors = error.errors.map(e => e.message);
      res.status(400).json({ error: 'Validation error', messages: validationErrors });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};


// exports.getPosts = async (req, res) => {
//   try {
//     const posts = await Post.findAll({
//       include: [
//         { model: User,
//           attributes: ["id", "username", "email"]
//         },
//         {
//           model: Like,
//           attributes: [] 
//         }
//       ],
//       attributes: {
//         include: [
//           [Sequelize.fn('COUNT', Sequelize.col('Likes.postid')), 'likeCount'] 
//         ]
//       },
//       group: ['Post.id', 'User.id'],
//       order: [['createdAt', 'DESC']]
//     });

//     res.json(posts);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User,
          attributes: ["id", "username", "email"]
        },
        {
          model: Like,
          attributes: ["UserId"]
        }
      ],
      // attributes: {
      //   include: [
      //     [Sequelize.fn('COUNT', Sequelize.col('Likes.postid')), 'likeCount'] 
      //   ]
      // },
      // group: ['Post.id', 'User.id'],
      order: [['createdAt', 'DESC']]
    });

    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if the user has already liked the post
    const existingLike = await post.hasLiker(req.user.id);

    if (existingLike) {
      return res.status(400).json({ error: 'You have already liked this post' });
    }

    // Add like to the post
    await post.addLiker(req.user.id);
    res.status(200).json({ message: 'Post liked' });
  } catch (error) {
    console.error(error);
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map(e => e.message);
      res.status(400).json({ error: 'Validation error', messages: validationErrors });
    } else if (error.name === 'SequelizeForeignKeyConstraintError') {
      res.status(400).json({ error: 'Invalid post or user ID' });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};


exports.getPostLikeCount = async (req, res) => {
  try {
    const { postId } = req.params;
    const posts = await Post.findAll({
      include: [
        { model: User }, 
        {
          model: Like
        }
      ],
      order: [['createdAt', 'DESC']]  // Sort posts by createdAt in descending order
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Count the number of likers for the post
    const likeCount = await post.countLikers();

    res.status(200).json({ postId, likeCount });
  } catch (error) {
    console.error(error);
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map(e => e.message);
      res.status(400).json({ error: 'Validation error', messages: validationErrors });
    } else if (error.name === 'SequelizeForeignKeyConstraintError') {
      res.status(400).json({ error: 'Invalid post ID' });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

