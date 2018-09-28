const express = require('express');
const app = express();
const ejs = require('ejs');
var port = process.env.PORT || 8080;
var user = require('./user');
app.set('view engine', 'ejs');
app.set('views', __dirname);
app.engine('html', ejs.renderFile);

app.use(express.static(__dirname));


//скопировано из https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', user);

app.get('*', function(req, res) {
	res.render('404/index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});