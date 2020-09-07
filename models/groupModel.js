module.exports = (sequelize, DataType) => sequelize.define('Group', {
  groupLocation: {
    type: DataType.STRING(45),
    allowNull: false,
  },
  groupName: {
    type: DataType.STRING(45),
    allowNull: false,
  },
  groupInfo: {
    type: DataType.STRING(200),
    allowNull: true,
  },
  latitude: {
    type: DataType.STRING(40),
    allowNull: true,
  },
  longitude: {
    type: DataType.STRING(40),
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});
