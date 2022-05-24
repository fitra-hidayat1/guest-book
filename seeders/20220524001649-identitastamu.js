'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('IdentitasTamus', [
      {
        NoIdentitas: '3273221306720011',
        Nama: 'Aditya Eprisi',
        TempatLahir: 'Bandar Lampung',
        TglLahir: '2006/02/03',
        JenisKelamin: 'L',
        Alamat: 'Jl. Hanjuang 6 N0.200 Blok H7',
        NoHandphone: '0815123456789',
        TelpRumah: '0213457654',
        Email: 'rodotangkepma@gmail.com',
        KdPropinsi: '08',
        KdKotaKabupaten: '0926',
        KdKecamatan: '092601',
        KdKelurahan: '092601003',
        Kodepos: '50611',
        KdJenisId: '1(KTP)',
        PhotoDiriKtp: 'profile.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('IdentitasTamus', null, {})
  }
};
