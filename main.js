const express = require('express')
const app = express()

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/../public'));
app.use('/links_lists', express.static(__dirname + '/links_lists'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index.html');
});
app.get('/links_list', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('links_list.html');
});

app.get('*', function(req, res) {
	res.render('404.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});