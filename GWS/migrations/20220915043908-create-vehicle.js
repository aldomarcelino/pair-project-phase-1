"use strict";
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable("Vehicles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserDetailId: {
        type: Sequelize.INTEGER,
        references: {
          model: "UserDetails",
          key: "id",
        },
      },
      type: {
        type: Sequelize.STRING,
      },
      policeNum: {
        type: Sequelize.STRING,
      },
      registrationNumber: {
        type: Sequelize.STRING,
      },
      rate: {
        type: Sequelize.INTEGER,
      },
      basePrice: {
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
    return queryInterface.dropTable("Vehicles");
  },
};
