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
  Vehicle.beforeCreate((data) => {
    data.registrationNumber = `${data.type[0]}-${new Date().getTime()}`;
    data.type === "car" ? (data.basePrice = 3_000) : (data.basePrice = 1_800);
  });
  return Vehicle;
};
