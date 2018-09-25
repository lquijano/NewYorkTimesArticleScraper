// Dependencies
//express is used to organize routes
var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
//this is a module used for datascraping -- to use jquery to access the data we get back from the data scrape
//cherrio takes the HTML from the request and let's you use jQuery like syntax to acess
var cheerio = require("cheerio");

// Initialize Express
var app = express();
// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "nytScrape";
var collections = ["articles"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Routes
// 1. At the root path, send a simple hello world message to the browser
app.get("/", function(req, res) {
  res.send("Hello world");
});

// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
