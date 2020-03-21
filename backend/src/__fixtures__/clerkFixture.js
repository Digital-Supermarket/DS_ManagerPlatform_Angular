const genericFixture = require('./genericFixture');
const ClerkRepository = require('../database/repositories/clerkRepository');

const clerkFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ClerkRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = clerkFixture;
