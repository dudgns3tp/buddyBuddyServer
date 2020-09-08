const _ = require('lodash');
const util = require('../modules/utils');
const resMes = require('../modules/responseMessage');
const groupService = require('../service/groupService');

const create = async (req, res) => {
  const { groupLocation, groupName, etc } = req.body;

  if (!groupLocation || !groupName) {
    console.log('필요한 값이 없습니다.');
    return res.status(400).send(util.fail(400, resMes.NULL_VALUE));
  }

  try {
    const group = await groupService.create({ groupLocation, groupName, etc });
    return res.status(200).send(util.success(200, resMes.SUCCESS_MAKE_GROUP, group));
  } catch (err) {
    console.log(`그룹 생성 에러.${err}`);
    return res.status(500).send(util.fail(500, resMes.INTERNAL_SERVER_ERROR));
  }
};

const readAll = async (req, res) => {
  try {
    const group = await groupService.readAll();
    return res.status(200).send(util.success(200, resMes.READ_ALL_GROUP, group));
  } catch (err) {
    console.log(`모든 그룹 조회 에러. ${err}`);
    return res.status(500).send(util.fail(500, resMes.INTERNAL_SERVER_ERROR));
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  if (_.isNil(id)) {
    console.log('필요한 값이 없습니다.');
    return res.status(400).send(util.fail(400, resMes.NULL_VALUE));
  }
  try {
    const isGroup = await groupService.readOne(id);
    if (_.isNil(isGroup)) {
      console.log(`${id} 번째 그룹은 없는 그룹 입니다.`);
      return res.status(400).send(util.fail(400, resMes.NOT_EXITS_GROUP));
    }

    const group = await groupService.delete(id);
    return res.status(200).send(util.success(200, resMes.DELETE_GROUP, group));
  } catch (err) {
    console.log(`그룹 삭제 에러. ${err}`);
    return res.status(500).send(util.fail(500, resMes.INTERNAL_SERVER_ERROR));
  }
};

const readOne = async (req, res) => {
  const { id } = req.params;
  if (_.isNil(id)) {
    console.log('필요한 값이 없습니다.');
    return res.status(400).send(util.fail(400, resMes.NULL_VALUE));
  }
  try {
    const isGroup = await groupService.readOne(id);
    if (_.isNil(isGroup)) {
      console.log(`${id} 번째 그룹은 없는 그룹 입니다.`);
      return res.status(400).send(util.fail(400, resMes.NOT_EXITS_GROUP));
    }

    const group = await groupService.readOne(id);
    return res.status(200).send(util.success(200, resMes.READ_ONE_GROUP, group));
  } catch (err) {
    console.log(`그룹 조회 에러. ${err}`);
    return res.status(500).send(util.fail(500, resMes.INTERNAL_SERVER_ERROR));
  }
};

const joinGroup = async (req, res) => {
  const { userId, isLeader } = req.body;
  const { groupId } = req.params;
  if (!userId || !groupId) {
    console.log('필요한 값이 없습니다.');
    return res.status(400).send(util.fail(400, resMes.NULL_VALUE));
  }
  try {
    const isGroup = await groupService.readOne(groupId);

    if (_.isNil(isGroup)) {
      console.log(`${groupId}는 없는 그룹 입니다. `);
      return res.status(400).send(util.fail(400, resMes.NOT_EXITS_GROUP));
    }

    const isGroupMember = await groupService.isGroupMember(userId);
    if (!_.isNil(isGroupMember)) {
      console.log('이미 등록된 멤버 입니다.');
      return res.status(400).send(util.fail(400, resMes.ALREADY_HAS_MEMBER));
    }

    const result = await groupService.joinGroup(groupId, userId, isLeader);
    return res.status(200).send(util.success(200, resMes.SUCCESS_JOIN_GROUP, result));
  } catch (err) {
    console.log(`그룹 가입 에러. ${err}`);
    return res.status(500).send(util.fail(500, resMes.INTERNAL_SERVER_ERROR));
  }
};

module.exports = {
  create,
  readAll,
  deleteOne,
  readOne,
  joinGroup,
};
