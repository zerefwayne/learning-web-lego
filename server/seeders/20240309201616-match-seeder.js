'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Matches', [
      {
        team_a_code: 'BAY',
        team_b_code: 'DOR',
        date: '2024-03-15T17:00:00.000Z',
        venue: 'Allianz Arena',
        total_tickets_for_sale: 100,
        total_tickets_available: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Matches', null, {});
  }
};
