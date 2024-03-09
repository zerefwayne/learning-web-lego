module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Teams', [
      {
        code: 'BAY',
        name: 'FC Bayern Munchen',
        logo_url: 'logo_munchen.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'DOR',
        name: 'Borussia Dortmund',
        logo_url: 'logo_bvb.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'RBL',
        name: 'RB Leipzeig',
        logo_url: 'logo_rbl.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teams', null, {});
  },
};