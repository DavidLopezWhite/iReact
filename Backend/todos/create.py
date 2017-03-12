import json
import logging
import os
import time
import uuid

import boto3
dynamodb = boto3.resource('dynamodb')


def create(event, context):
    # if 'text' not in data:
    #     logging.error("Validation Failed")
    #     raise Exception("Couldn't create the todo item.")
    #     return
    #
    # timestamp = int(time.time() * 1000)
    #
    # table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])
    #
    # item = {
    #     'id': str(uuid.uuid1()),
    #     'text': data['text'],
    #     'checked': False,
    #     'createdAt': timestamp,
    #     'updatedAt': timestamp,
    # }
    #
    # # write the todo to the database
    # table.put_item(Item=item)

    # create a response
    response = {
        "statusCode": 200,
        "body": "restaurants: [{id: 'rest1', name: 'Restaurant 1',timings:{'5.00pm': true,'5.30pm': false,'6.00pm': true,'6.30pm': false,'7.00pm': true,'7.30pm': false,}},{id: 'rest2',name: 'Restaurant 2',timings:{'5.00pm': true,'5.30pm': true,'6.00pm': true,'6.30pm': false,'7.00pm': false,'7.30pm': false}}"
    }

    return response
