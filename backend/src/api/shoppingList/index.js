module.exports = (app) => {
  app.post(`/shopping-list`, require('./shoppingListCreate'));
  app.put(`/shopping-list/:id`, require('./shoppingListUpdate'));
  app.post(`/shopping-list/import`, require('./shoppingListImport'));
  app.delete(`/shopping-list`, require('./shoppingListDestroy'));
  app.get(
    `/shopping-list/autocomplete`,
    require('./shoppingListAutocomplete'),
  );
  app.get(`/shopping-list`, require('./shoppingListList'));
  app.get(`/shopping-list/:id`, require('./shoppingListFind'));
};
