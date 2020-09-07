module.exports = (sequelize, DataType) => sequelize.define('Group', {
  groupLocation: {
    type: DataType.STRING(45),
    allowNull: false,
  },
  groupName: {
    type: DataType.STRING(45),
    allowNull: false,
  },
  etc: {
    type: DataType.TEXT,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});
