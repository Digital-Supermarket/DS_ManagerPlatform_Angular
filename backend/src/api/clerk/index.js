module.exports = (app) => {
  app.post(`/clerk`, require('./clerkCreate'));
  app.put(`/clerk/:id`, require('./clerkUpdate'));
  app.post(`/clerk/import`, require('./clerkImport'));
  app.delete(`/clerk`, require('./clerkDestroy'));
  app.get(
    `/clerk/autocomplete`,
    require('./clerkAutocomplete'),
  );
  app.get(`/clerk`, require('./clerkList'));
  app.get(`/clerk/:id`, require('./clerkFind'));
};
