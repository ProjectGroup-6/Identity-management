from flask import Flask,jsonify,render_template,request
from blockdb import get_from_db
from flask_cors import CORS, cross_origin
from bigchaindb_driver import BigchainDB
from bigchaindb_driver.crypto import generate_keypair
import json
from werkzeug.utils import secure_filename


# https://test.bigchaindb.com/
def sendStudentData(data):
    # https://test.bigchaindb.com/
    bdb = BigchainDB('http://localhost:9984')
    alice = generate_keypair()
    print(alice)
    
    #data to store
    data = {'data': data}
    tx = bdb.transactions.prepare(
        operation='CREATE',
        signers=alice.public_key,
        asset= data)

    print(alice.private_key)
    print(alice.public_key)
    
    print("\nhello\n")
    signed_tx = bdb.transactions.fulfill(
        tx,
        private_keys=alice.private_key)

    transaction_details = bdb.transactions.send_commit(signed_tx)
    print(json.dumps(transaction_details,indent=2))

    

    transaction_id = transaction_details['id']
    tx_id=transaction_id

    retrived_data = bdb.transactions.retrieve(transaction_id)

    print(retrived_data['asset']['data'])

    #transaction_id='80178ae696d5a324de29c965f4705dc46022e6dff17894391c2da1c1ac477826'
    res=get_from_db.get_from_rest(tx_id)
    
    
    return res


        