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

def validate(data):
  userid = data['uid']
  password = data['password']
  usertype = data['usertype']
  cursor = mydb.cursor()
  if(usertype=="Admin"):
    sql_select_query = "select * from admin"
    cursor.execute(sql_select_query)
    result=cursor.fetchall()
    if ((result[0][0]==userid)&(result[0][1]==password)):
      return 0
    else :
      return 1

  if(usertype=="Student"):
    sql_select_query = "select studentid,studentphone from student where studentid=%s"
    user=(userid,)
    cursor.execute(sql_select_query,user)
    result=cursor.fetchall()
    
    if ((result[0][0]==userid)&(result[0][1]==password)):
      return 2
    else :
      return 3  
    
  