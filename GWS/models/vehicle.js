"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    static associate(models) {
      Vehicle.belongsTo(models.UserDetail);
    }
  }
  Vehicle.init(
    {
      UserDetailId: DataTypes.INTEGER,
      type: DataTypes.STRING,
      policeNum: DataTypes.STRING,
      registrationNumber: DataTypes.STRING,
      basePrice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Vehicle",
    }
  );
  return Vehicle;
};
