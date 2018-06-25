const express = require('express');
const app = express();
const ejs = require('ejs');
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.engine('html', ejs.renderFile);

// make express look in this directory for evrything
app.use(express.static(__dirname));

// set the home page route
/*
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});
app.get('/links_list', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('links_list');
});

app.get('/about', function(req, res) {
	res.render('about');
});

 app.get('/not_found', function(req, res) {
	res.render('not_found');
});
*/
app.get('*', function(req, res) {
	res.render('404/index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});