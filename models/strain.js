'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class strain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.strain.belongsToMany(models.user, {through: models.usersStrains})
      models.strain.hasMany(models.effect)
      models.strain.hasMany(models.mine)
      models.strain.hasMany(models.dig)
    }
  }
  strain.init({
    strainId: DataTypes.INTEGER,
    strain: DataTypes.STRING,
    dominant: DataTypes.STRING,
    funfact: DataTypes.STRING,
    parents: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'strain',
  });
  return strain;
};