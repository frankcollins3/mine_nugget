'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usersStrains extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usersStrains.init({
    userId: DataTypes.INTEGER,
    strainId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usersStrains',
  });
  return usersStrains;
};