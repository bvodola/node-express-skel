// =====
// Setup
// =====
var express = require('express');
var router = express.Router();

// ======
// Routes
// ======
module.exports = function() {

	router.get('/', function(req, res) {
      	res.render('index.ejs');
	});

	return router;
}