var express = require('express');
var path = require('path');

// Create our app
var app = express();

app.use(express.static('public'));

// CSS
app.use('/static/css/bootstrap/', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/static/css/jquery-ui/', express.static(__dirname + '/node_modules/jquery-ui-dist'));
app.use('/static/css/font-awesome/', express.static(__dirname + '/node_modules/font-awesome'));

// JS Libraries
app.use('/scripts/', express.static(__dirname + '/node_modules'));
app.use('/static/js/bootstrap/', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/static/js/jquery/', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/static/js/swagger-parser/', express.static(__dirname + '/node_modules/swagger-parser/dist'));
app.use('/static/js/jsonld/', express.static(__dirname + '/node_modules/jsonld/js'));
app.use('/static/js/jquery-ui/', express.static(__dirname + '/node_modules/jquery-ui-dist'));
app.use('/static/js/lodash/', express.static(__dirname + '/node_modules/lodash'));
app.use('/static/js/moment/', express.static(__dirname + '/node_modules/moment'));
app.use('/static/js/js-htmlencode/', express.static(__dirname + '/node_modules/js-htmlencode/build'));

app.listen(8000, function () {
  console.log('Express server is up on port 8000');
});
