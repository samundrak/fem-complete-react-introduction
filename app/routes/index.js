const routes = (server, { youtube }) => {

  server.get('/search', (req, res) => {
    youtube.search(req, res);
  });
  return server;
};

module.exports = routes;
