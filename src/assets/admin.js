const admin = require('express').Router();
const sqlite3 = require('sqlite3').verbose();
//const gldb = require('./constants').db;
//console.log(gldb);

admin.route('/').get((req, res) => {
	res.send('Win');
});


admin.route('/send').get((req, res) => {
	
	
}).post((req, res) => {
	var fr = req.body.new_nick;
	
	res.send(fr);
});

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
admin.route('/dummy').get((req, res) => {
	dummy();
	res.send('done');
});
*/
/*
admin.route('/create').get((req, res) => {
	check_db();
	res.send('done');
});
*/
module.exports = admin;