import mysql.connector
try:
  from .. import send_mail
except:
  import send_mail


mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="root",
  database="idm"
)

print(mydb)


def get_result(res,txid):
    studentid = res['asset']['data']['studentid']
    firstname = res['asset']['data']['First Name']
    lastname = res['asset']['data']['Last Name']
    studentemail = res['asset']['data']['Email']
    dob = res['asset']['data']['Date-Of-Birth']
    studentphone = res['asset']['data']['Phone No']
    gender = res['asset']['data']['Gender']
    city = res['asset']['data']['City']
    state = res['asset']['data']['State']
    pincode = res['asset']['data']['PinCode']
    fathername = res['asset']['data']['Father Name']
    fatheremail = res['asset']['data']['Father Email']
    fatherphone = res['asset']['data']['Father Phone No']
    mothername = res['asset']['data']['Mother Name']
    motheremail = res['asset']['data']['Mother Email']
    motherphone = res['asset']['data']['Mother Phone No']
    currentaddress = res['asset']['data']['Current Address']
    permanentaddress = res['asset']['data']['Permanenet Address']
    

    sql_insert_Query = "insert into student(txid,studentid,firstname,lastname,studentemail,dob,studentphone,gender,city,state,pincode,fathername,fatheremail,fatherphone,mothername,motheremail,motherphone,currentaddress,permanentaddress) values(%s,%s, %s, %s, %s, %s, %s,%s, %s, %s, %s, %s, %s,%s, %s, %s, %s, %s, %s)"
    insert_tuple = (txid,studentid,firstname,lastname,studentemail,dob,studentphone,gender,city,state,pincode,fathername,fatheremail,fatherphone,mothername,motheremail,motherphone,currentaddress,permanentaddress)
    cursor = mydb.cursor()
    cursor.execute(sql_insert_Query,insert_tuple)
    mydb.commit()
    print ("Record inserted successfully into python_users table")


    send_mail.send_mail(txid, firstname, studentemail,studentid,studentphone)


    
    