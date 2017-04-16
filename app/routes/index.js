const routes = (server, { youtube }) => {
  server.get('/api/search', (req, res) => {
    youtube.search(req, res);
  });
  server.get('/api/video/:videoId', (req, res) => {
    youtube.show(req, res);
  });
  server.get('/api/related/:videoId', (req, res) => {
    youtube.related(req, res);
  });
  return server;
};

module.exports = routes;
