module.exports = (app) => {
  app.post(`/item`, require('./itemCreate'));
  app.put(`/item/:id`, require('./itemUpdate'));
  app.post(`/item/import`, require('./itemImport'));
  app.delete(`/item`, require('./itemDestroy'));
  app.get(
    `/item/autocomplete`,
    require('./itemAutocomplete'),
  );
  app.get(`/item`, require('./itemList'));
  app.get(`/item/:id`, require('./itemFind'));
};
