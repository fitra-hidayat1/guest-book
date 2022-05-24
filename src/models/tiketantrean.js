'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TiketAntrean extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.TiketTamu, {
        foreignKey: 'NoTiket'
      })
    }
  }
  TiketAntrean.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      NoTiket: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      TglBuatTiket: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      StatusTiket: {
        type: DataTypes.ENUM('Berlaku', 'Kadaluarsa'),
        allowNull: false,
      },
      StatusCetak: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'TiketAntrean',
  });
  return TiketAntrean;
};