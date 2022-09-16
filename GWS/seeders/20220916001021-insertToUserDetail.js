"use strict";
const fs = require('fs');

module.exports = {
  up(queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./data/driver.json', 'utf-8'))
      .map(e => {
        e.createdAt = new Date();
        e.updatedAt = new Date();
        return e;
      });
    return queryInterface.bulkInsert("UserDetails", data, {});
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("UserDetails", null, {});
  },
};
