"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    get pickUpTimes() {
      return new Date();
    }

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
      type: DataTypes.STRING,
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
      hooks: {
        beforeCreate: (data) => {
          if (data.type === "costumer") {
            data.balance = 0;
          } else {
            data.rideRate = 0;
            data.earning = 0;
            data.totalRides = 0;
          }
        },
        beforeUpdate: (data) => {
          data.pickUpTime = data.pickUpTimes;
        },
      },
      sequelize,
      modelName: "UserDetail",
    }
  );
  // UserDetail.beforeCreate((data) => {
  //   if (data.type === "costumer") {
  //     data.balance = 0;
  //   } else {
  //     data.rideRate = 0;
  //     data.earning = 0;
  //     data.totalRides = 0;
  //   }
  // });

  // UserDetail.beforeUpdate((data) => {
  //   console.log("masuk sini");
  //   data.pickUpTime = data.pickUpTimes;
  //   console.log(data.pickUpTimes);
  // });
  return UserDetail;
};
