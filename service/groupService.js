const _ = require('lodash');
const { Group, GroupUserRelation } = require('../models');

module.exports.create = async ({ groupLocation, groupName, etc }) => {
  const etcData = _.isNil(etc) ? '' : etc;
  try {
    const group = await Group.create({
      groupLocation,
      groupName,
      etc: etcData,
    });
    console.log(group);
    return group;
  } catch (err) {
    throw err;
  }
};

module.exports.readAll = async () => {
  try {
    const group = await Group.findAll();
    return { group };
  } catch (err) {
    throw err;
  }
};

module.exports.delete = async (id) => {
  try {
    const group = await Group.destroy({
      where: {
        id,
      },
    });
    return group;
  } catch (err) {
    throw err;
  }
};

module.exports.readOne = async (id) => {
  try {
    const group = await Group.findOne({
      where: {
        id,
      },
    });
    return group;
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
