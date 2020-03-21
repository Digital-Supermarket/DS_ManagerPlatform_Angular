module.exports = (app) => {
  app.post(`/manager`, require('./managerCreate'));
  app.put(`/manager/:id`, require('./managerUpdate'));
  app.post(`/manager/import`, require('./managerImport'));
  app.delete(`/manager`, require('./managerDestroy'));
  app.get(
    `/manager/autocomplete`,
    require('./managerAutocomplete'),
  );
  app.get(`/manager`, require('./managerList'));
  app.get(`/manager/:id`, require('./managerFind'));
};
