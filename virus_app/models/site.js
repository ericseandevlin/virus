var mongoose = require('mongoose');
var siteSchema = require('./site').schema;

// SCHEMA
var siteSchema = new mongoose.Schema({
  title: { type: String, required: true, },
  description: String,
	link: { type: String, required: true, },
	vote: Number,
	site_img_link: String,
	category: String,
	created_at: { type:Date, default: Date.now }
});

// CREATE MODEL USING SCHEMA
var Site = mongoose.model('Site', siteSchema);
module.exports = Site;
