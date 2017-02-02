var express = require('express');
var router = express.Router();
var request = require('request');

//globals
var queryUrl = 'http://wasjustthinking.com/class.php'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

//post request for userName display
router.post('/userName', function(req, res, next) {
	//check the name entered against the provided url
	request.get(queryUrl, function(error, response, classData) {
		classData = JSON.parse(classData);
		console.log(classData)
		res.render('userName', {
			classData: classData,
			name: req.body.nameSearch
		})
	})
});


module.exports = router;
