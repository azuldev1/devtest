var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

//Require routes
var index = require('./routes/index');
var users = require('./routes/users');

//Define and initizlize server
var server = app.listen(process.env.PORT || 3000, function(){
    var port = server.address().port;
    console.log("Listening on port: " + port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../public')));

//Use routes
app.use('/', index);
app.use('/users', users);

module.exports = app;
