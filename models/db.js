/*
 * Example:
 *
 * var db = require('db');
 * // create user
 * var user = new db.User();
 * user.save(function callback(err) {});
 * // find all users
 * db.Users.find();
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../config');

mongoose.connect('mongodb://'+config.db.mongo.servers,function(err, db) {
  if(!err) {
    console.log("MongoDB: We are connected");
  }else{
    console.log("MongoDB: Connecting failed !!! ");
  }
});


var UserSchema = new Schema({
	user_id		: { type: String, index: true, unique: true },
	nickname	: { type: String, index: true },
	mac_passwd	: { type: String, unique: true },
	date		: { type: Date, 'default': function() { return new Date(); } }
});

var GroupSchema = new Schema({
	group_id	: { type: String, index: true, unique: true },
	group_name	: { type: String, index: true },
	members		: { type: Array },
	date        : { type: Date, 'default': function() { return new Date(); } }
});

var MessageSchema = new Schema({
	mesg_id		: { type: String, index: true, unique: true },
	from_id		: { type: String },
	to_id		: { type: String },
	timestamp	: { type: Date, 'default': function() { return new Date(); } },
	mesg_type	: { type: String },
    text_content	: { type: String },
	sound_url	: { type: String }
});



// Make database models publicly accessible

var db = {
	User: mongoose.model('User', UserSchema),
	Group: mongoose.model('Group', GroupSchema),
	Message: mongoose.model('Message', MessageSchema)	
};

module.exports = db;