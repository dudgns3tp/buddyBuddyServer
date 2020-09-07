module.exports = (sequelize, DataType) => sequelize.define('Group', {
  groupLocation: {
    type: DataType.STRING(45),
    allowNull: false,
  },
  groupName: {
    type: DataType.STRING(45),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});
