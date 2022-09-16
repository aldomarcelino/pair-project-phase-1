"use strict";
const fs = require('fs');

module.exports = {
  up(queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./data/item.json', 'utf-8'))
      .map(e => {
        delete e.id;
        e.createdAt = new Date();
        e.updatedAt = new Date();
        return e;
      });
    return queryInterface.bulkInsert("Items", data, {});
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Items", null, {});
  },
};
