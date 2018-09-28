const user = require('express').Router();
const sqlite3 = require('sqlite3').verbose();
//const gldb = require('./constants').db;
//console.log(gldb);



user.route('/nick').post((req, res) => {
	var nick = req.body.new_nick;
	res.cookie('nick' , nick)
	.render('user/nick/index.html');
});
/*.get((req, res) => {
	res.render('user/nick/index.html');
}) */
/*
function check_db(){
	var db = new sqlite3.Database(gldb, sqlite3.OPEN_READONLY, (err) => {
		if (err) {
			console.log(Object.getOwnPropertyNames(err));
			console.error(err.message);
			if (err.code == 'SQLITE_CANTOPEN'){ 
				console.log('Trying to create new Database');
				db = new sqlite3.Database(gldb, (err) => {
					if (err) {
						console.error(err.message);
						return;
					}
					else{
						console.log('Database created.');
						db.run('CREATE TABLE fruits(name text)');
					}
				});
				db.close((err) => {
					if (err) {
						console.error(err.message);
					}
					console.log('Close2 the database connection.');
				});
			}
			else 
				return;
		}
		else{
			console.log('Database exists.');
		}
	});
	db.close((err) => {
		if (err) {
			console.error(err.message);
		}
		console.log('Close the database connection.');
	});
}
*/
/*
function dummy(){
	for(var i = 0; i < 100; i++){
		var db = new sqlite3.Database(gldb, sqlite3.OPEN_READONLY, (err) => {
			if (err) {
				console.error(err.message);
			}
			console.log('Callback horse finished!');
		});
		console.log('Consecutive horse finished!');
		if (db === undefined)
			console.log('blo');
		db.close((err) => {
			if (err) {
				console.error(err.message);
			}
		});
		console.log('DB closed.');
	}
}
*/
/*
user.route('/dummy').get((req, res) => {
	dummy();
	res.send('done');
});
*/
/*
user.route('/create').get((req, res) => {
	check_db();
	res.send('done');
});
*/
module.exports = user;