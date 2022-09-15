"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    static associate(models) {
      UserDetail.belongsTo(models.User);
      UserDetail.hasMany(models.Payment);
      UserDetail.hasOne(models.Vehicle);
    }
  }
  UserDetail.init(
    {
      phoneNumber: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      balance: DataTypes.INTEGER,
      pickUpTime: DataTypes.DATE,
      pickUpFrom: DataTypes.STRING,
      drop: DataTypes.STRING,
      rideType: DataTypes.STRING,
      rideRate: DataTypes.STRING,
      lisence: DataTypes.STRING,
      earning: DataTypes.INTEGER,
      totalRides: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserDetail",
    }
  );
  UserDetail.beforeCreate((data) => {
    if (data.type === "costumer") {
      data.balance = 0;
    } else {
      data.rideRate = 0;
      data.earning = 0;
      data.totalRides = 0;
    }
  });
  return UserDetail;
};
