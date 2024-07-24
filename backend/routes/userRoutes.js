const express = require('express');
const { followUser, followerList } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/follow/:userId', authMiddleware, followUser);
router.get('/follow/followerList', authMiddleware, followerList);

module.exports = router;
