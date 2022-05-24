'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TiketAntreans', [
      {
        NoTiket: 'D01-01-10-5-21',
        TglBuatTiket: '2021-5-10 07:23:04',
        StatusTiket: 'Berlaku',
        StatusCetak: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NoTiket: 'D01-01-11-5-22',
        TglBuatTiket: '2021-5-11 07:23:04',
        StatusTiket: 'Berlaku',
        StatusCetak: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NoTiket: 'D01-01-12-5-22',
        TglBuatTiket: '2021-5-12 07:23:04',
        StatusTiket: 'Berlaku',
        StatusCetak: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TiketAntreans', null, {})
  }
};
