module.exports = (app) => {
  app.post(`/aisle`, require('./aisleCreate'));
  app.put(`/aisle/:id`, require('./aisleUpdate'));
  app.post(`/aisle/import`, require('./aisleImport'));
  app.delete(`/aisle`, require('./aisleDestroy'));
  app.get(
    `/aisle/autocomplete`,
    require('./aisleAutocomplete'),
  );
  app.get(`/aisle`, require('./aisleList'));
  app.get(`/aisle/:id`, require('./aisleFind'));
};
