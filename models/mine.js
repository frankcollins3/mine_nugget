'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.mine.belongsTo(models.strain)
    }
  }
  mine.init({
    review: DataTypes.TEXT,
    title: DataTypes.STRING,
    strainId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mine',
  });
  return mine;
};