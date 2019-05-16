import mysql.connector
try:
  from .. import send_mail
except:
  import send_mail
import json

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="root",
  database="idm"
)


def fetchdata():
   cursor = mydb.cursor()
   cursor.execute('''SELECT * from office''')
   row_headers=[x[0] for x in cursor.description] #this will extract row headers
   rv = cursor.fetchall()
   json_data=[]
   for result in rv:
        json_data.append(dict(zip(row_headers,result)))
#    print(json.dumps(json_data))     
   return json_data
   
   

