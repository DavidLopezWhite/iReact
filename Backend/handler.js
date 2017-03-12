'use strict';

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current time is ${new Date().toTimeString()}.`,
    }),
  };

  callback(null, response);
};

module.exports.shabadoobie = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "SHABADOOBIE"
    })
  };
  callback(null, response);
};

module.exports.allevents = (event, context, callback) => {
  try{
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://irec:pass@ds129090.mlab.com:29090/ireact');
    var eventSchema = mongoose.Schema({
      restaurant: String,
      organizer: String
    });
    var Stuff = mongoose.model('Events', eventSchema);
    var items = ''
    var queryResults = Stuff.find({}, function (err, events) {
      if (err) return console.error(err);
      items = events;
    }).then( () => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        payload: items
      })
    };
    callback(null, response);
    })
  } catch (e){
    callback(null, { statusCode: 400, body: JSON.stringify(e.message) });
  }
};
