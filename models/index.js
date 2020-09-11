const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./userModel')(sequelize, Sequelize);
db.Group = require('./groupModel')(sequelize, Sequelize);
db.GroupUserRelation = require('./groupUserModel')(sequelize, Sequelize);

/** M:N User : Group */
db.User.belongsToMany(db.Group, {
  through: 'GroupUserRelation',
  foreignKey: 'userId',
  otherKey: 'groupId',
});
db.Group.belongsToMany(db.User, {
  through: 'GroupUserRelation',
  foreignKey: 'groupId',
  otherKey: 'userId',
});
db.GroupUserRelation.belongsTo(db.User, {
  foreignKey: 'userId',
});
db.GroupUserRelation.belongsTo(db.Group, {
  foreignKey: 'groupId',
});

module.exports = db;
