const restify = require('restify');
const plugins = require('restify-plugins');
const Youtube = require('./app/handlers/Youtube');

global.config = require('./config.json');
const youtube = new Youtube();
const server = restify.createServer({
  name: 'App',
  version: '1.0.0',
});

server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.queryParser());
server.use(plugins.bodyParser());
server.use(restify.CORS());

require('./app/routes')(server, { youtube });

server.listen(3000, () => {
  console.log('%s listening at %s', server.name, server.url);
});
