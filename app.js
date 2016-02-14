var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fv = require('johnny-five');
var board = new fv.Board();
var led;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

board.on('ready', function(){
	led = new fv.Led(13);
})

app.post('/ajax', function(req,res){
	res.type('json');
	console.log(JSON.stringify(req.body.textValue));
	res.end(JSON.stringify({}))

	led.toggle();
})


var server = app.listen(8080);