/* eslint-disable no-undef */
const _ = require('lodash');
const { User, Group, GroupUserRelation } = require('../models');

module.exports.create = async ({ groupLocation, groupName, etc }) => {
  const etcData = _.isNil(etc) ? '' : etc;
  try {
    const group = await Group.create({
      groupLocation,
      groupName,
      etc: etcData,
    });
    return group;
  } catch (err) {
    throw err;
  }
};

module.exports.readAll = async () => {
  try {
    const group = await Group.findAll();
    return group;
  } catch (err) {
    throw err;
  }
};

module.exports.delete = async (groupId) => {
  try {
    const group = await Group.destroy({
      where: {
        groupId,
      },
    });
    return group;
  } catch (err) {
    throw err;
  }
};

module.exports.readOne = async (groupId) => {
  try {
    const group = await Group.findOne({
      where: {
        groupId,
      },
    });
    const groupUser = await GroupUserRelation.findAll({
      include: [{
        model: User,
        as: 'User',
      }],
      where: {
        groupId,
      },
      attributes: ['groupUserId', 'isLeader'],
    });

    return {
      group,
      users: groupUser,
    };
  } catch (err) {
    throw err;
  }
};

module.exports.joinGroup = async (groupId, userId, isLeader) => {
  const leader = !_.isNil(isLeader);
  try {
    const group = await GroupUserRelation.create({
      groupId,
      userId,
      isLeader: leader,
    });
    return group;
  } catch (err) {
    throw err;
  }
};

module.exports.isGroupMember = async (userId) => {
  try {
    const group = await GroupUserRelation.findOne({
      where: {
        userId,
      },
    });
    return group;
  } catch (err) {
    throw err;
  }
};
