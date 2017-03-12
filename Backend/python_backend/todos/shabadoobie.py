import json
import logging
import os
import time
import uuid

import boto3
dynamodb = boto3.resource('dynamodb')


def search(event, context):
    location = event['pathParameters']['location']
    response = {
        "statusCode": 200,
        "body": "SearchTerm: " + location + ", restaurants: [{id: 'rest1', name: 'Restaurant 1',timings:{'5.00pm': true,'5.30pm': false,'6.00pm': true,'6.30pm': false,'7.00pm': true,'7.30pm': false,}},{id: 'rest2',name: 'Restaurant 2',timings:{'5.00pm': true,'5.30pm': true,'6.00pm': true,'6.30pm': false,'7.00pm': false,'7.30pm': false}}"
    }

    return response


def reservation(event, context):
    restname = event['pathParameters']['id']
    response = {
      "statusCode": 200,
      "body": "{ restaurantId: " + restname + ", timing: '6.30pm', guests: [{email: 'person1@ireact.com', attending: true}, {email: 'person2@ireact.com', attending: true}] }"
    }
    return response
