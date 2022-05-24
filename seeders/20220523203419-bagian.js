'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bagians', [
      {
        KodeBagian: 'D01',
        NamaBagian: 'Bagian Umum',
        Keterangan: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeBagian: 'D02',
        NamaBagian: 'Bagian Sumber Daya Manusia',
        Keterangan: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeBagian: 'D03',
        NamaBagian: 'Bagian Keuangan',
        Keterangan: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bagians', null, {})
  }
};
