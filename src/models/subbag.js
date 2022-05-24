'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubBag extends Model {
    static associate(models) {
      // define association here
      SubBag.belongsTo(models.Bagian, {
        foreignKey: 'KodeBagian',
      })
      this.hasMany(models.TiketTamu, {
        foreignKey: 'KdSubBagSeksi'
      })
    }
  }
  SubBag.init({
    KodeBagian: {
      type: DataTypes.STRING(3),
      allowNull: false,
      foreignKey: true
    },
    KodeSubBag: {
      type: DataTypes.STRING(6),
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    Jabatan: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
    },
    Keterangan: DataTypes.STRING(60)
  }, {
    sequelize,
    modelName: 'SubBag',
  });
  return SubBag;
};