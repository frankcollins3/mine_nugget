'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('effects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strainId: {
        type: Sequelize.INTEGER
      },
      taste: {
        type: Sequelize.STRING
      },
      smell: {
        type: Sequelize.TEXT
      },
      gold: {
        type: Sequelize.STRING
      },
      mine: {
        type: Sequelize.CHAR
      },
      nug: {
        type: Sequelize.STRING
      },
      thc: {
        type: Sequelize.INTEGER
      },
      cbd: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('effects');
  }
};