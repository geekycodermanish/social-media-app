const { User, Follow } = require('../models');



exports.followUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const loggedInUserId = req.user.id;

    if (!userId || isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    if (parseInt(userId) === loggedInUserId) {
      return res.status(400).json({ error: 'You cannot follow yourself' });
    }

    const userToFollow = await User.findByPk(userId);
    if (!userToFollow) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the user is already following the target user
    const existingFollow = await Follow.findOne({
      where: { followerId: loggedInUserId, followedId: userId }
    });


    console.log("existingFollow::::::::", existingFollow)
    if (existingFollow) {
      return res.status(400).json({ error: 'You are already following this user' });
    }

    // Add the follow relationship
    await req.user.addFollowing(userToFollow);
    return res.status(200).json({ message: 'User followed' });
  } catch (error) {
    // Log the error (optional) and return a generic error message
    console.error('Error following user:', error);
    return res.status(500).json({ error: 'An error occurred while trying to follow the user' });
  }
};

exports.followerList = async (req, res) => {
  try {
    const loggedInUserId = req.user.id;

    const followList = await Follow.findAll({
      where: { followerId: loggedInUserId},
    });

     let result = await Promise.all(followList.map( (single_item) => {
       return User.findOne({
        where: { id : single_item.followedId },
        attributes: [ 'id', 'username', 'email' ]
      });

  }))
    res.status(200).json({result});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// exports.followLiat = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const userToFollow = await User.findByPk(userId);
//     if (!userToFollow) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     await req.user.addFollowing(userToFollow);
//     res.status(200).json({ message: 'User followed' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
