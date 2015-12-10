var mongoose = require('mongoose');
var siteSchema = require('./site').schema;

// SCHEMA
var siteSchema = new mongoose.Schema({
  title: String,
  description: String,
	link: { type: String, required: true, unique: true },
	vote: Number,
	site_img_link: String,
	category: String,
	created_at: { type:Date, default: Date.now }
});

// CREATE MODEL USING SCHEMA
var Site = mongoose.model('Site', siteSchema);
module.exports = Site;
