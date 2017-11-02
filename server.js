'use strict'

var express = require('express'),
    bodyParser = require('body-parser'),
    http_module = require('http'),
    path = require('path'),
    app = express(),
    http = http_module.Server(app);
app.set('port', (process.env.PORT || 8080));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// Set Static Fold
app.use('/', express.static(__dirname + '/public/'));

// Define routes
app.get("/", function(req, res){
  res.render("about");
});
app.get("/cv", function(req, res){
  res.render("cv");
});
app.get("/contact", function(req, res){
  res.render("contact");
});
app.get("*", function(req, res){
  res.render("404");
});
http.listen(app.get('port'), () => {
  console.info('==> 🌎  Go to http://localhost:%s', app.get('port'));
});
