var config = require('./config');
var db = require('./models/db');

console.log("Running ok!");
console.log("The root path : " ,config.paths.root);
console.log("The models path : " ,config.paths.models);
console.log("maxMessageLength : ",config.limits.maxMessageLength)
console.log("dbServer info : ",config.db.mongo.servers)