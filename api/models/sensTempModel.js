'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TempSchema = new Schema({
  temp: {
    type: String,
    required: 'Kindly enter the value of the temperature'
  },
  hum: {
    type: String,
    required: 'Kindly enter the value of the umidity'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Temps', TempSchema);