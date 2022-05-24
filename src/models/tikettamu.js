'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TiketTamu extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.TiketAntrean, { foreignKey: 'NoTiket' })
      this.belongsTo(models.Bagian, {foreignKey: 'KdBagSubSeksi'})
      this.belongsTo(models.SubBag, {foreignKey: 'KdSubBagSeksi'})
    }
  }
  TiketTamu.init({
    NoTiket: {
      type: DataTypes.STRING,
      foreignKey: true,
    },
    NoIdentitas: DataTypes.STRING,
    Nama: DataTypes.STRING,
    KdBagSubSeksi: {
      type: DataTypes.STRING,
      foreignKey: true,
    },
    KdSubBagSeksi: {
      type: DataTypes.STRING,
      foreignKey: true,
    },
    Jabatan: DataTypes.STRING,
    KeperluanBertamu: DataTypes.STRING,
    TglMintaBertamu: DataTypes.DATE,
    MintaJamBertamu: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'TiketTamu',
  });
  return TiketTamu;
};