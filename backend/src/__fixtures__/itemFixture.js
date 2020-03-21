const genericFixture = require('./genericFixture');
const ItemRepository = require('../database/repositories/itemRepository');

const itemFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ItemRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = itemFixture;
