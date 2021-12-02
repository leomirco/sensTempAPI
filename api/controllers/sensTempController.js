'use strict';


var mongoose = require('mongoose'),
  Temp = mongoose.model('Temps');


//CREA UNA NUOVA LETTURA DI TEMPERATURA
  exports.create_a_temp = function(req, res) {
    var new_temp = new Temp(req.body);
    new_temp.save(function(err, temp) {
      if (err)
        res.send(err);
      res.json(temp);
    });
  };

//LEGGE TUTTE LE TEMPERATURE
exports.list_all_temps = function(req, res) {
    Temp.find({}, function(err, temp) {
      if (err)
        res.send(err);
      res.json(temp);
    });
  };