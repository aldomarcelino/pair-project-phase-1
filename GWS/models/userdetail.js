'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDetail.init({
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
    rideDetails: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserDetail',
  });
  return UserDetail;
};