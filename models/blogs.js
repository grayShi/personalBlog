/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogs', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    subject: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'subject'
    },
    contentText: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'contentText'
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
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'createdBy'
    },
    updatedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'updatedBy'
    },
    isValid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'is_valid'
    },
    version: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'version'
    }
  }, {
    tableName: 'blogs'
  });
};
