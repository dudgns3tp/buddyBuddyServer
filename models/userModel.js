module.exports = (sequelize, DataType) => sequelize.define('User', {
  userName: {
    type: DataType.STRING(30),
    allowNull: false,
  },
  part: {
    type: DataType.STRING(30),
    allowNull: false,
  },
  phone: {
    type: DataType.STRING(30),
    allowNull: false,
  },
  place: {
    type: DataType.STRING(100),
    allowNull: false,
  },
  station: {
    type: DataType.STRING(30),
    allowNull: false,
  },
  university: {
    type: DataType.STRING(45),
    allowNull: false,
  },
  major: {
    type: DataType.STRING(50),
    allowNull: false,
  },
  gender: {
    type: DataType.INTEGER(1),
    allowNull: false,
  },
  status: {
    type: DataType.STRING(10),
    allowNull: false,
    defaultValue: 'OB',
  },
  userInfo: {
    type: DataType.TEXT,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});
