const genericFixture = require('./genericFixture');
const ShoppingListRepository = require('../database/repositories/shoppingListRepository');

const shoppingListFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ShoppingListRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = shoppingListFixture;
