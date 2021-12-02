'use strict';
module.exports = function(app) {
  var sensTemp = require('../controllers/sensTempController');

  // todoList Routes
  app.route('/temps')
    .get(sensTemp.list_all_temps)
    .post(sensTemp.create_a_temp);


 // app.route('/temps/:tempId')
 //   .get(sensTemp.read_a_temp)
 //   .put(sensTemp.update_a_temp)
 //   .delete(sensTemp.delete_a_temp);
};