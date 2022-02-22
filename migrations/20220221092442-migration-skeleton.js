'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     return queryInterface.sequelize.transaction(async (transaction) => {
      // await queryInterface.removeConstraint("Users", 'primaryKey', {
      //   transaction,
      // });
      await queryInterface.renameColumn("Users", "user_id", "id", {
        transaction,
      });
      // await queryInterface.addConstraint("Users", ["user_id"], {
      //   primaryKey:true
      // });
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
