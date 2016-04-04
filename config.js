var path = require('path');

global.application_root = __dirname;


var config = {};

config.hostname = 'localhost';
config.port = 5000;

config.db = {};
config.db.mongo = {};
config.db.mongo.servers='localhost:27017/streamradio';

config.paths = {};
config.paths.root = application_root;
config.paths.models = path.join(application_root,'models');

config.limits = {};
config.limits.maxMessageLength = 3000;


module.exports = config;