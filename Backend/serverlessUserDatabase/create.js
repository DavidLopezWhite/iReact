'use strict'

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  if (typeof data.email !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Couldn\'t create the user'));
    return;
  }

  const params = {
    TableName: 'users',
    Item: {
      id: uuid.v1(),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      confirmed: data.confirmed,
      createdAt: timestamp,
      updatedt: timestamp
    }
  }

  dynamoDb.put(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t create the user.'));
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item)
    }
    callback(null, response);
  })
}
