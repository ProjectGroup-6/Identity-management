from flask import Flask,jsonify,render_template,request
from blockdb import get_from_db,send_student_data
from flask_cors import CORS, cross_origin
from bigchaindb_driver import BigchainDB
from bigchaindb_driver.crypto import generate_keypair
import json,sys
from werkzeug.utils import secure_filename
from app.mysql import student_data_store,pri_edu_det_fetch,add_education_details,studentdatafetch,validate_user
from app.mysql import office,library,add_borrow_details,staff_details_fetch,studentidValidate,student_details_fetch

app=Flask(__name__)

CORS(app)
@app.route('/',methods=['GET','POST'])
def test_conn():
    return render_template('home.html')


@app.route('/fetch',methods=['GET','POST']) 
def fetch():
    jsondata=studentdatafetch.fetchdata()
    return json.dumps(jsondata)


@app.route('/pri_edu_det_fetch',methods=['GET','POST']) 
def fetch_pri_edu_details():
    jsondata=pri_edu_det_fetch.fetchdata()
    return json.dumps(jsondata)


@app.route('/library',methods=['GET','POST']) 
def library_details():
    jsondata=library.fetchdata()
    return json.dumps(jsondata)


@app.route('/office',methods=['GET','POST']) 
def office_details():
    jsondata=office.fetchdata()
    return json.dumps(jsondata)    


@app.route('/education_details',methods=['GET','POST']) 
def education_details():
    data = dict(request.form)
    print(data)
    flag = add_education_details.education_details(data)
    return jsonify({"result" : flag})


@app.route('/validate',methods=['GET','POST']) 
def validate():
    data = dict(request.form)
    print(data)
    flag = validate_user.validate(data)
    return jsonify({"result" : flag})


@app.route('/studentid_validation',methods=['GET','POST']) 
def validate1():
    data = dict(request.form)
    flag = studentidValidate.fetch(data)
    return jsonify({"result" : flag})    


@app.route('/upload_borrow_details',methods=['GET','POST'])
def borrow_details():
    data=dict(request.form)
    print("data-------------")
    print(data) 
    flag = add_borrow_details.add_details(data)
    return jsonify({"result" : flag})  


@app.route('/staffFetch',methods=['GET','POST'])
def fetch_details():
    jsondata=staff_details_fetch.fetchdata()
    return json.dumps(jsondata)


@app.route('/student_data_fetch',methods=['GET','POST'])
def fetch_student_details():
    jsondata=student_details_fetch.fetchdata()
    return json.dumps(jsondata)    


@app.route('/upload',methods=['GET','POST'])
def get_prod_info():
    data=dict(request.form)
    print("data-------------")
    print(data)


    # res=send_student_data.sendStudentData(data)
    bdb = BigchainDB('http://localhost:9984')
    alice = generate_keypair()
    print(alice)
    
    #data to store
    data = {'data': data}
    tx = bdb.transactions.prepare(
        operation='CREATE',
        signers=alice.public_key,
        asset= data)

    print("\nPrivate Key")
    print(alice.private_key)
    print("\nPublic Key")
    print(alice.public_key)
    
    signed_tx = bdb.transactions.fulfill(
        tx,
        private_keys=alice.private_key)

    transaction_details = bdb.transactions.send_commit(signed_tx)
    print(json.dumps(transaction_details,indent=2))

    transaction_id = transaction_details['id']
    tx_id=transaction_id
    
    print("\ntransaction_id")
    print(tx_id)
    #print(sys.getsizeof(tx_id))

    retrived_data = bdb.transactions.retrieve(transaction_id)

    # print(retrived_data['asset']['data'])

    #transaction_id='80178ae696d5a324de29c965f4705dc46022e6dff17894391c2da1c1ac477826'
    res=get_from_db.get_from_rest(tx_id)
    
    student_data_store.get_result(res,tx_id)

    #Check the satus code first to know if the ID is actually valid
    try:
        return jsonify({
            'result':res['asset']['data']['studentid'],
            'tx_id': tx_id,
            'status_code':0
            })
    # IF the satus code is 1 the hash is not valid
    except:
        return jsonify({
            "result":"un identified token",
            'status_code':1
        })

    response = jsonify({"txid" : tx_id, "studentid" : res['asset']['data']['studentid']})
    # print("********************************")
    # print()
    return response     


    




CORS(app, expose_headers='Authorization')
app.run(debug=True)