'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TiketTamus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NoTiket: {
        type: Sequelize.STRING(22)
      },
      NoIdentitas: {
        type: Sequelize.STRING(20)
      },
      Nama: {
        type: Sequelize.STRING(50)
      },
      KdBagSubSeksi: {
        type: Sequelize.STRING(3)
      },
      KdSubBagSeksi: {
        type: Sequelize.STRING(6)
      },
      Jabatan: {
        type: Sequelize.STRING(60)
      },
      KeperluanBertamu: {
        type: Sequelize.STRING(60)
      },
      TglMintaBertamu: {
        type: Sequelize.DATE
      },
      MintaJamBertamu: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('TiketTamus');
  }
};