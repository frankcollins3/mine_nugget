'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.dig.belongsTo(models.strain)
    }
  }
  dig.init({
    userId: DataTypes.INTEGER,
    strainId: DataTypes.INTEGER,
    into_it: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'dig',
  });
  return dig;
};