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

def add_details(data):
    bookid=data['bookid']
    studentid=data['studentid']
    bookname=data['bookname'] 
    authorname=data['authorname']
    publishedyear=data['publishedyear']
    issuedate=data['issuedate']
    duedate=data['duedate']

    cursor = mydb.cursor()
    sql_select_query = "select txid from student where studentid='%s'" %(studentid)
    cursor.execute(sql_select_query)
    result=cursor.fetchall()
    if(bool(result)):
        txid=result[0][0]
        sql_insert_Query = "insert into library1(bookid,studentid,bookname,authorname,publishedyear,issuedate,duedate) values(%s, %s, %s, %s, %s, %s,%s)"
        insert_tuple = (bookid,studentid,bookname,authorname,publishedyear,issuedate,duedate)
        cursor = mydb.cursor()
        cursor.execute(sql_insert_Query,insert_tuple)
        mydb.commit()
        print ("Record inserted successfully into python_users table")
        return 1
    return 0    

