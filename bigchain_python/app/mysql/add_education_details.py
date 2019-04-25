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

def education_details(data):
    studentid=data['studentid']
    schoolname=data['schoolname']
    xboard=data['xboard'] 
    collegename=data['collegename']
    xiiboard=data['xiiboard']
    xyop=data['xyop']
    xiiyop=data['xiiyop']
    xper=data['xper']
    xiiper=data['xiiper']

    cursor = mydb.cursor()
    sql_select_query = "select txid from student where studentid='%s'" %(studentid)
    cursor.execute(sql_select_query)
    result=cursor.fetchall()
    if(bool(result)):
        txid=result[0][0]
        sql_insert_Query = "insert into education_details(txid,studentid,schoolname,xboard,collegename,xiiboard,xyop,xiiyop,xper,xiiper) values(%s, %s, %s, %s, %s, %s,%s, %s, %s, %s)"
        insert_tuple = (txid,studentid,schoolname,xboard,collegename,xiiboard,xyop,xiiyop,xper,xiiper)
        cursor = mydb.cursor()
        cursor.execute(sql_insert_Query,insert_tuple)
        mydb.commit()
        print ("Record inserted successfully into python_users table")
        return 1
    return 0    

