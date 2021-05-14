'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('Todos', [
      {
        title: 'タイトル1',
        detail: 'コンテンツ1',
        category: 'work',
        is_finished: true,
        created_at: now,
        updated_at: now
      },
      {
        title: 'タイトル2',
        detail: 'コンテンツ2',
        category: 'work',
        is_finished: true,
        created_at: now,
        updated_at: now
      },
      {
        title: 'タイトル3',
        detail: 'コンテンツ3',
        category: 'private',
        is_finished: false,
        created_at: now,
        updated_at: now
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
