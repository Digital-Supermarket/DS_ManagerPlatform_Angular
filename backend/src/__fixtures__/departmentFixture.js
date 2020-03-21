const genericFixture = require('./genericFixture');
const DepartmentRepository = require('../database/repositories/departmentRepository');

const departmentFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new DepartmentRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = departmentFixture;
