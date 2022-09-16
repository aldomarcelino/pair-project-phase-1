"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Item);
      Payment.belongsTo(models.UserDetail);
    }
  }
  Payment.init(
    {
      amount: DataTypes.INTEGER,
      ItemId: DataTypes.INTEGER,
      UserDetailId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
