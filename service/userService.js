const { User } = require('../models');

module.exports.readAll = async () => {
  try {
    const user = await User.findAll();
    return user;
  } catch (err) {
    throw err;
  }
};
