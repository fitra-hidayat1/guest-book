'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SubBags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      KodeBagian: {
        type: Sequelize.STRING(3),
        allowNull: false,
      },
      KodeSubBag: {
        type: Sequelize.STRING(6),
        unique: true,
        allowNull: false,
      },
      Jabatan: {
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
    await queryInterface.dropTable('SubBags');
  }
};