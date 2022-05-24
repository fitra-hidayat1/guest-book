'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TiketTamus', [
      {
        NoTiket: 'D01-01-10-5-21',
        NoIdentitas: '2021-5-10 07:23:04',
        Nama: 'Berlaku',
        KdBagSubSeksi: 'D01',
        KdSubBagSeksi: 'D01-01',
        Jabatan: 'Kepala Sub Bagian Tata Usaha',
        KeperluanBertamu: 'Meeting',
        TglMintaBertamu: '2021/05/03',
        MintaJamBertamu: '10:18:15'
,       createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TiketTamus', null, {})
  }
};
