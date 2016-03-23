var express = require('express');
var router = express.Router();
var models = require('../../models');
var User = models.User;

//Get a list of all users
router.get('/', function(req, res, next){
  User.findAll({}).then(function(response){
    res.send(response);
  });
});

//Add a new user
router.post('/', function(req, res, next){
  User.create(req.body).catch(function(err){
    if(err) {
        console.log(err);
    }
  }).then(res.sendStatus(res.statusCode));
});

//Delete a user
router.get('/delete-user/:id?', function(req, res, next){
  var userId = req.params.id;
  User.destroy({
        where : {
            id: userId
        }
    }).then(function(response){
        res.sendStatus(res.statusCode);
    });
});

module.exports = router;
