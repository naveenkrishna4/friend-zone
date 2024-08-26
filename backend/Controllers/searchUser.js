const User = require("../Models/userSchema");

const searchUser = async (req, res) => {
  const { searchInput } = req.query;

  if (!searchInput) {
    return res.status(400).json({ error: "No search Value" });
  }

  const loggedUser = req.user;

  const searchedUser = await User.find({
    $or: [
      { username: { $regex: searchInput, $options: "i" } },
      { email: { $regex: searchInput, $options: "i" } },
    ],
    email: { $ne: loggedUser.email },
  }).select("-password");

  return res.status(200).json({ users: searchedUser });
};

const getSuggestedUser = async (req, res) => {
  const loggedUser = req.user;
  try {
<<<<<<< HEAD
    const loggedUserWithFriends = await User.findById(loggedUser._id).populate(
      "friends.user"
    );
    const friendIds = loggedUserWithFriends.friends.map((friend) =>
      friend.user._id.toString()
    );
    const getSuggestedUsers = await User.find({
      _id: { $nin: [loggedUser._id, ...friendIds] },
    });
    return res.status(200).json({ getSuggestedUsers });
  } catch (error) {
    return res.status(400).json({ error: "Failed to get suggested users" });
=======
    const users = await User.find();

    const getSuggestedUsers = users.filter(
      (e) => !e._id.equals(loggedUser._id)
    );

    return res.status(200).json({ getSuggestedUsers });
  } catch (error) {
    return res.status(400).json({ error: "failed to get suggested users" });
>>>>>>> ce3fac772431a8c8e9511f59f433c727b141f23c
  }
};

module.exports = { searchUser, getSuggestedUser };
