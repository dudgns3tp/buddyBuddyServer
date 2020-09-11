/* eslint-disable no-undef */
const { User, sequelize } = require('../models');

module.exports.readAll = async () => {
  try {
    const user = await User.findAll();
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports.getUserCount = async () => {
  try {
    const userCount = await User.findAll({
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('userId')), 'userCnt']],
    });
    return userCount;
  } catch (err) {
    throw (err);
  }
};
