from smtplib import SMTP
import smtplib

def send_mail(txid,firstname,email,studentid,studentphone):
  try:  
   server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
   server.login("koppresh@gmail.com", "kops_7897")
   SUBJECT = "Confirmation mail"
   TEXT = "Thanks for registering. Your Identity is secured!!"
   student_id = "Your STUDENTID is : %s"%(studentid)
   password = "Your PASSWORD is : %s"%(studentphone)
   message = """\From: %s\nTo: %s\nSubject: %s\n\n%s \n%s \n%s""" % ("IDM",", ".join(email), SUBJECT, TEXT,student_id,password)
   server.sendmail(
    "koppresh@gmail.com", 
    email, 
    message)

   print("Mail sent successfully!!") 
   server.quit()
  except:
      print("failed") 