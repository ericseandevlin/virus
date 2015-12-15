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

var Site = require("./models/site.js");

// ----------------------------------
// GET SITES --------------------
// ----------------------------------
app.get('/sites', function(req, res) {
  console.log('got get sites request');

	Site.find().then(function(sites) {

    console.log("sending "+sites.length+" sites");

		res.send(sites);
	});
});


// ------------------------------
// POST SITES -------------------
// ------------------------------
app.post('/sites', function(req, res) {
  console.log('got post sites request');

  var site = new Site(req.body);
  site.save(function(err) {
    if (err) {
      console.log('Error! '+err);
    } else {
      console.log('new site saved!');
    }
  res.send(site);
  });
});



// ------------------------------
// EDIT SITES -------------------
// ------------------------------
app.put('/sites/:id', function(req, res) {
  Site.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: req.body
  }, function(err, site) {
    console.log(site);
    res.send(site);
  });
});


// --------------------------------
// DELETE SITES -------------------
// --------------------------------
app.delete('/sites/:id', function(req, res) {
  Site.findOneAndRemove({_id: req.params.id}, function(err) {
    if(err) console.log(err);
    console.log('Site deleted')
    res.send('Site Deleted');
  });
});
