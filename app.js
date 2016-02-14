var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fv = require('johnny-five');
var board = new fv.Board();
//var led;
var piezo;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

board.on('ready', function(){
	//led = new fv.Led(13);
	piezo = new fv.Piezo(3);

	board.repl.inject({
		piezo : piezo
	})
})

app.post('/ajax', function(req,res){
	res.type('json');
	console.log(JSON.stringify(req.body.textValue));
	res.end(JSON.stringify({}))

	/* piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["F4", 1 / 4],
      ["D4", 1 / 4],
      ["A4", 1 / 4],
      [null, 1 / 4],
      ["A4", 1],
      ["G4", 1],
      [null, 1 / 2],
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["F4", 1 / 4],
      ["D4", 1 / 4],
      ["G4", 1 / 4],
      [null, 1 / 4],
      ["G4", 1],
      ["F4", 1],
      [null, 1 / 2]
    ],
    tempo: 100
  });*/

  // Plays the same song with a string representation
  piezo.play({
    // song is composed by a string of notes
    // a default beat is set, and the default octave is used
    // any invalid note is read as "no note"
    song: "A - A - A - F - C5 - A - F - C5 - A -- E5 - E5 - E5 - F5 - C5 - G4 - F - C5 - A --",
    beats: 1 / 4,
    tempo: 100
  });

	//led.toggle();
})


var server = app.listen(8080);