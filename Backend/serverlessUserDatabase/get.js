'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: 'users',
    Key: {
      id: event.pathParameters.id
    }
  };

  dynamoDb.get(params, (error, result) => {
    if (error) {
      callback(new Error('Couldn\'t fetch the user.'));
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item)
    };
    callback(null, response);
  });
}
