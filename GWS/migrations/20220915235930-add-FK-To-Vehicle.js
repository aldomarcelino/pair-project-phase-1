"use strict";

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn("Vehicles", "UserDetailId", {
      type: Sequelize.INTEGER,
      references: {
        model: "UserDetails",
        key: "id",
        onDelete: "cascade",
      },
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Vehicles", "UserDetailId");
  },
};
