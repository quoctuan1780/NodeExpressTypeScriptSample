'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.changeColumn('Posts', 'content',
        {
          type: Sequelize.DataTypes.TEXT,
          defaultValue: undefined,
        }, { transaction })
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.changeColumn('Posts', 'content',
        {
          type: Sequelize.DataTypes.STRING,
          defaultValue: undefined,
        }, { transaction })
    });
  }
};
