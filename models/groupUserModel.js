module.exports = (sequelize, DataType) => sequelize.define('GroupUserRelation', {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  is_leader_flag: {
    type: DataType.BOOLEAN,
    allowNull: false,
  },
  userId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  groupId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});
