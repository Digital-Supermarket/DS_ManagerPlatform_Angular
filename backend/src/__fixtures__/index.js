const userFixture = require('./userFixture');
const clientFixture = require('./clientFixture');
const productFixture = require('./productFixture');
const itemFixture = require('./itemFixture');
const shoppingListFixture = require('./shoppingListFixture');
const aisleFixture = require('./aisleFixture');
const clerkFixture = require('./clerkFixture');
const managerFixture = require('./managerFixture');
const departmentFixture = require('./departmentFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  client: clientFixture,
  product: productFixture,
  item: itemFixture,
  shoppingList: shoppingListFixture,
  aisle: aisleFixture,
  clerk: clerkFixture,
  manager: managerFixture,
  department: departmentFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
