module.exports = (app) => {
  app.post(`/department`, require('./departmentCreate'));
  app.put(`/department/:id`, require('./departmentUpdate'));
  app.post(`/department/import`, require('./departmentImport'));
  app.delete(`/department`, require('./departmentDestroy'));
  app.get(
    `/department/autocomplete`,
    require('./departmentAutocomplete'),
  );
  app.get(`/department`, require('./departmentList'));
  app.get(`/department/:id`, require('./departmentFind'));
};
