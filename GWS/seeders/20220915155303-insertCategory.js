'use strict';
const fs = require('fs');

module.exports = {
  async up (queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./data/categoryItem.json', 'utf-8'))
    .map(e => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
      return e;
    });
  return queryInterface.bulkInsert("Categories", data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
