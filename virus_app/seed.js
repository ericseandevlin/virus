// var seed = require('./seed.js');  in server.js, un-comment and comment out once seed is run

// ======================================
// ======================================

// REQUIRE MONGOOSE AND MODEL
var mongoose = require('mongoose'),
    Site = require('./models/site.js');

// SEED
// creating sites
var site1 = new Site({
  title: "Pet the dog!",
  description: "Pet the dog!",
  link: "http://dogs.are.the.most.moe/",
  vote: 1,
  site_img_link: "./siteImages/petDog.png",
  category: "completely pointless"
});
site1.save(function(err) {
	if(err) return handleError(err);
	console.log("Saved: " + site1);
});

var site2 = new Site({
  title: "S.W.A.T",
  description: "Selfies with a twist",
  link: "http://swat.rtgp.xyz/",
  vote: 2,
  site_img_link: "./siteImages/selfieChips.jpeg",
  category: "odd"
});
site2.save(function(err) {
	if(err) return handleError(err);
	console.log("Saved: " + site2);
});

var site3 = new Site({
  title: "Watch it Shred!",
  description: "Shred of the week",
  link: "https://www.ssiworld.com/en/watch_it_shred?where=sotm&cat=cat&tpl=sml&page=1#topcontrols",
  vote: 0,
  site_img_link: "./siteImages/shred.png",
  category: "mildly interesting"
});
site3.save(function(err) {
	if(err) return handleError(err);
	console.log("Saved: " + site3);
});

var site4 = new Site({
  title: "Emot.es",
  description: "A collection of every emoticon",
  link: "http://emot.es/",
  vote: 0,
  site_img_link: "./siteImages/emotes.png",
  category: "mildly interesting"
});
site4.save(function(err) {
	if(err) return handleError(err);
	console.log("Saved: " + site4);
});

var site5 = new Site({
  title: "Ball on a String!",
  description: "So fun you'll go insane.",
  link: "http://www.ballonastring.com/",
  vote: 0,
  site_img_link: "./siteImages/ballonstring.png",
  category: "interactive"
});
site5.save(function(err) {
	if(err) return handleError(err);
	console.log("Saved: " + site5);
});
