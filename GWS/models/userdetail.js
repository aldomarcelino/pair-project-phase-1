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
      balance: DataTypes.INTEGER,
      pickUpTime: DataTypes.DATE,
      pickUpFrom: DataTypes.STRING,
      drop: DataTypes.STRING,
      rideType: DataTypes.STRING,
      rideRate: DataTypes.STRING,
      rideStatus: DataTypes.BOOLEAN,
      lisence: DataTypes.STRING,
      earning: DataTypes.INTEGER,
      totalRides: DataTypes.INTEGER,
      rideDetails: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserDetail",
    }
  );
  return UserDetail;
};
