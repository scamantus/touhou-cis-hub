const express = require('express');
const app = express();
const ejs = require('ejs');
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.engine('html', ejs.renderFile);

app.use(express.static(__dirname));


app.get('*', function(req, res) {
	res.render('404/index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});