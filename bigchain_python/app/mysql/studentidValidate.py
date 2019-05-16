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

def fetch(data):
    studentid=data['studentid']
    cursor = mydb.cursor()
    query = "select * from student where studentid='%s'" %(studentid)
    cursor.execute(query)
    row_headers=[x[0] for x in cursor.description]
    rv=cursor.fetchall()
    if(bool(rv)):
        json_data=[]
        for result in rv:
                json_data.append(dict(zip(row_headers,result)))
        #    print(json.dumps(json_data))     
        return json_data

    return 0    
   

