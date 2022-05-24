'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bagian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.SubBag, {
        foreignKey: 'KodeBagian'
      })
      this.hasMany(models.TiketTamu, {
        foreignKey: 'KdBagSubSeksi'
      })
    }
  }
  Bagian.init({
    KodeBagian: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      unique: true,
    }, 
    NamaBagian: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
    },
    Keterangan: DataTypes.STRING(60)
  }, {
    sequelize,
    modelName: 'Bagian',
  });
  return Bagian;
};