'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IdentitasTamu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IdentitasTamu.init({
    NoIdentitas: {
      type: DataTypes.STRING(20),
    },
    Nama: {
      type: DataTypes.STRING,
    },
    TempatLahir: {
      type: DataTypes.STRING,
    },
    TglLahir: DataTypes.DATE,
    JenisKelamin: {
      type: DataTypes.ENUM('L', 'P'),
    },
    Alamat: DataTypes.STRING,
    NoHandphone: DataTypes.INTEGER,
    TelpRumah: DataTypes.INTEGER,
    Email: DataTypes.STRING,
    KdPropinsi: DataTypes.STRING,
    KdKotaKabupaten: DataTypes.STRING,
    KdKecamatan: DataTypes.STRING,
    KdKelurahan: DataTypes.STRING,
    Kodepos: DataTypes.STRING,
    KdJenisId: {
      type: DataTypes.ENUM('1(KTP)', '2(Paspor)')
    },
    PhotoDiriKtp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'IdentitasTamu',
  });
  return IdentitasTamu;
};