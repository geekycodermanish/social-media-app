const express = require('express');
const { createPost, getPosts, likePost, getPostLikeCount } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createPost);
router.get('/', getPosts);
router.get('/like/:postId', authMiddleware, likePost);
router.post('/:postId/postLikeCount', authMiddleware, getPostLikeCount);

module.exports = router;
