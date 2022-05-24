'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TiketAntreans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NoTiket: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      },
      TglBuatTiket: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      StatusTiket: {
        type: Sequelize.ENUM('Berlaku', 'Kadaluarsa'),
        allowNull: false,
      },
      StatusCetak: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable('TiketAntreans');
  }
};