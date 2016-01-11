var express = require('express');
//var logger = require('morgan');
var bodyParser = require('body-parser');

var config = require('./dbProvider/databaseConfig.js');

var app = express();
var indexRouter = express.Router();

var database = require('./dbProvider/database')(config);

//app.user(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

require('./app/routes/routes')(app);

indexRouter.get('/*', function(req, res){
   res.sendFile(__dirname + '/public/index.html');
});

app.use('/', indexRouter);

////Open port
var port = 8080;
app.listen(port, function(){
	console.log("Application is running on port " + port);
});
