"use strict";
const fs = require('fs');

module.exports = {
  up(queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'))
      .map(e => {
        e.createdAt = new Date();
        e.updatedAt = new Date();
        return e;
      });
    return queryInterface.bulkInsert("Users", data, {});
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
