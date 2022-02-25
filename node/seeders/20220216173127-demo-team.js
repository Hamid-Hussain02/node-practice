'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teams', [{
      name: 'Alpha',
      company: 'company1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Bravo',
      company: 'company2',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teams', null, {});
  }
};
