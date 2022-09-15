"use strict";
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable("UserDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      birthDate: {
        type: Sequelize.DATE,
      },
      type: {
        type: Sequelize.STRING,
      },
      balance: {
        type: Sequelize.INTEGER,
      },
      pickUpTime: {
        type: Sequelize.DATE,
      },
      pickUpFrom: {
        type: Sequelize.STRING,
      },
      drop: {
        type: Sequelize.STRING,
      },
      rideType: {
        type: Sequelize.STRING,
      },
      rideRate: {
        type: Sequelize.STRING,
      },
      lisence: {
        type: Sequelize.STRING,
      },
      earning: {
        type: Sequelize.INTEGER,
      },
      totalRides: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable("UserDetails");
  },
};
