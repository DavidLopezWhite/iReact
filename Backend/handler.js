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
