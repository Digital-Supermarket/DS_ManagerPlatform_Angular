const genericFixture = require('./genericFixture');
const ClientRepository = require('../database/repositories/clientRepository');

const clientFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ClientRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = clientFixture;
