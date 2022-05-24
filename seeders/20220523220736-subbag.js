'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SubBags', [
      {
        KodeBagian: 'D01',
        KodeSubBag: 'D01-01',
        Jabatan: 'Kepala Sub Bagian Tata Usaha',
        Keterangan: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeBagian: 'D01',
        KodeSubBag: 'D01-02',
        Jabatan: 'Kepala Sub Bagian Personalia',
        Keterangan: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeBagian: 'D01',
        KodeSubBag: 'D01-03',
        Jabatan: 'Kepala Sub Bagian Pengarsipan',
        Keterangan: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SubBags', null, {})
  }
};
