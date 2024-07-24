const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader;
  console.log("token:::::", token)
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findByPk(decoded.userId);
    if (!req.user) {
      console.log("::::::::::::")
      return res.status(401).json({ error: 'Invalid token' });
    }
    next();
  } catch (error) {
    console.log(":::::ppppppppppp:::::::")
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
