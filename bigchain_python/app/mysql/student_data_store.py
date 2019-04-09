import mysql.connector


mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="root"
)

print(mydb)


def get_result(res):
    name = res['asset']['data']['username']
    email = res['asset']['data']['email']
    dob = res['asset']['data']['birthdate']
    print(name)
    print(email)
    print(dob)