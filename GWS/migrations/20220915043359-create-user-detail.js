'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('UserDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      balance: {
        type: Sequelize.INTEGER
      },
      pickUpTime: {
        type: Sequelize.DATE
      },
      pickUpFrom: {
        type: Sequelize.STRING
      },
      drop: {
        type: Sequelize.STRING
      },
      rideType: {
        type: Sequelize.STRING
      },
      rideRate: {
        type: Sequelize.STRING
      },
      rideStatus: {
        type: Sequelize.BOOLEAN
      },
      lisence: {
        type: Sequelize.STRING
      },
      earning: {
        type: Sequelize.INTEGER
      },
      totalRides: {
        type: Sequelize.INTEGER
      },
      rideDetails: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('UserDetails');
  }
};