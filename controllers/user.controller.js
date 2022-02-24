var games = require('../GamesScrapper.js');
const db = require("../models");
const User = db.user;
const Role = db.role;

exports.allAccess = (req, res) => {
    // res.status(200).send('Hello new message');
    games.run().then(function (events) {
  
      res.status(200).send(events);
    });
  };
  
  exports.userBoard = (req, res) => {
    games.run().then(function (events) {
  
      res.status(200).send(JSON.stringify(events));
    });
  };

  exports.userNewsletterStatusChange = (req, res) => {
    try{
    User.findOneAndUpdate({email: req.body.email}, {$set:{signedForNewsletter:req.body.newStatus}}, {new: true}, (err, doc) => {

      res.status(200).send(JSON.stringify(doc));
  })}catch(err){
      res.status(302).send(JSON.stringify("Something wrong when updating data!"));
  }
     
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };