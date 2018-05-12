var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var sources = require('./routes/sources/index');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Content-Type", "application/json");

  if (req.method == "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST, PUT, PATCH, DELETE");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    return res.sendStatus(200);
  }

  next();
});

app.use('/sources', sources);

// error handler

app.use(function(err, req, res, next) {
  if(err === undefined) {
    return next();
  }
  
  res.status(err.status || 500).send({
    status: err.status,
    message: err.message
  });
});


module.exports = app;
