from bigchaindb_driver import BigchainDB
from bigchaindb_driver.crypto import generate_keypair
import json
# https://test.bigchaindb.com/
bdb = BigchainDB('http://localhost:9984')
alice = generate_keypair()
print(alice)

#data to store
data = {'data': {'students': {'student_name':'Madhu',
                                  'class':'8th A'}}}
tx = bdb.transactions.prepare(
    operation='CREATE',
    signers=alice.public_key,
    asset= data)

print(alice.private_key)
print(alice.public_key)

signed_tx = bdb.transactions.fulfill(
    tx,
    private_keys=alice.private_key)

transaction_details = bdb.transactions.send_commit(signed_tx)
print(json.dumps(transaction_details,indent=2))

transaction_id = transaction_details['id']

print(transaction_id)


retrived_data = bdb.transactions.retrieve(transaction_id)

print(retrived_data['asset']['data'])