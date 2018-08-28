/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'name'
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'password'
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'role'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updatedAt'
    },
    createdBy: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'createdBy'
    },
    updatedBy: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updatedBy'
    }
  }, {
    tableName: 'user'
  });
};
