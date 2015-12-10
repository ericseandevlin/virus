// ----------------------------------
// DEPENDANCIES ---------------------
// ----------------------------------

var express      = require('express'),
    mongoose     = require('mongoose'),
    bodyParser   = require('body-parser'),
    md5          = require('md5'),
    cookieParser = require('cookie-parser'),
    morgan       = require('morgan');

// var port         = process.env.PORT || 3000;
    app          = express();
    app.listen(3000);

// ----------------------------------
// MIDDLEWARE -----------------------
// ----------------------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());


// ----------------------------------
// DB STUFF -------------------------
// ----------------------------------
console.log("server working");
mongoose.connect('mongodb://localhost/virus_app');

// already seeded
// var seed = require('./seed.js')


// ----------------------------------
// GET QUESTIONS --------------------
// ----------------------------------
app.get('/', function(req, res) {
  console.log('got sites request');

	Site.find().then(function(sites) {

    console.log("sending "+sites.length+" sites");

		res.send(sites);
	});
});


// ----------------------------------
// POST QUESTIONS -------------------
// ----------------------------------
