'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('strains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strainId: {
        type: Sequelize.INTEGER
      },
      strain: {
        type: Sequelize.STRING
      },
      dominant: {
        type: Sequelize.STRING
      },
      funfact: {
        type: Sequelize.STRING
      },
      parents: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('strains');
  }
};