var app  = require('express')()
var bodyParser  = require('body-parser');
var cors = require('cors');
var busboy = require('connect-busboy');



var secret = 'aT42dfdf46GDh6fdp09hmgd35FdsDe';

//bodyparser needs
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json({ extended: true }));
app.use(cors());
app.use(busboy()); 


app.use(function(err, req, res, next) {
  next(err);
});

//AllNews
app.get('/getAllNews', function(req, res) {	
	console.log("chegou malandro1")
});

//AllEvents
app.get('/getAllEvents', function(req, res) {	
	console.log("chegou malandro22")
});

//configuracao para aws
//var port = 9002;
//app.listen(port);

//configuracao para o heroku
app.listen(process.env.PORT || 5000)

console.log('Listening');