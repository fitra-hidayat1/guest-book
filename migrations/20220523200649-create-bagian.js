'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bagians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      KodeBagian: {
        type: Sequelize.STRING(3),
        unique: true,
        allowNull: false,
      },
      NamaBagian: {
        type: Sequelize.STRING(60),
        unique: true,
        allowNull: false,
      },
      Keterangan: {
        type: Sequelize.STRING(60)
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
    await queryInterface.dropTable('Bagians');
  }
};