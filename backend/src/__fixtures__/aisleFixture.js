const genericFixture = require('./genericFixture');
const AisleRepository = require('../database/repositories/aisleRepository');

const aisleFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new AisleRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = aisleFixture;
