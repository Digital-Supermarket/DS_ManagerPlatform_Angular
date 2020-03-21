const genericFixture = require('./genericFixture');
const ManagerRepository = require('../database/repositories/managerRepository');

const managerFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ManagerRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = managerFixture;
