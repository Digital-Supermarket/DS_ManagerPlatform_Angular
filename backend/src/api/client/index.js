module.exports = (app) => {
  app.post(`/client`, require('./clientCreate'));
  app.put(`/client/:id`, require('./clientUpdate'));
  app.post(`/client/import`, require('./clientImport'));
  app.delete(`/client`, require('./clientDestroy'));
  app.get(
    `/client/autocomplete`,
    require('./clientAutocomplete'),
  );
  app.get(`/client`, require('./clientList'));
  app.get(`/client/:id`, require('./clientFind'));
};
