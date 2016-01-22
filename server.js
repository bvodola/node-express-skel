// =====
// Setup
// =====

// Core Modules
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var request = require('request');

// App Modules
var app = express();
var configDB = require('./config/database.js');

// =============
// Configuration
// =============
mongoose.connect(configDB.url); // connect to our database
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ==========
// Middleware
// ==========
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ======
// Routes
// ======
var routes = require('./routes')();
app.use('/', routes);

// ============
// Start Server
// ============
var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});