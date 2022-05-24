'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IdentitasTamus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NoIdentitas: {
        type: Sequelize.STRING(20)
      },
      Nama: {
        type: Sequelize.STRING
      },
      TempatLahir: {
        type: Sequelize.STRING
      },
      TglLahir: {
        type: Sequelize.DATE
      },
      JenisKelamin: {
        type: Sequelize.ENUM('L', 'P'),
      },
      Alamat: {
        type: Sequelize.STRING
      },
      NoHandphone: {
        type: Sequelize.STRING(15)
      },
      TelpRumah: {
        type: Sequelize.STRING(12)
      },
      Email: {
        type: Sequelize.STRING(50)
      },
      KdPropinsi: {
        type: Sequelize.STRING(2)
      },
      KdKotaKabupaten: {
        type: Sequelize.STRING(4)
      },
      KdKecamatan: {
        type: Sequelize.STRING(6)
      },
      KdKelurahan: {
        type: Sequelize.STRING(9)
      },
      Kodepos: {
        type: Sequelize.STRING(5)
      },
      KdJenisId: {
        type: Sequelize.ENUM('1(KTP)', '2(Paspor)')
      },
      PhotoDiriKtp: {
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
    await queryInterface.dropTable('IdentitasTamus');
  }
};