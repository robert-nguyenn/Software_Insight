<?php
  // These lines are attempting to retrieve data from the $_PORT superglobal array.
  // get data, name is associated with html code
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // your domain name
  // This line sets the sender's email address for the outgoing email.
  $email_from = 'info@yourwebsite.com' ;

  // This line sets the subject of the email.
  $email_subject = 'New Form Submission';

  // This block of code constructs the body of the email. 
  // It concatenates the various pieces of form data into a single string, with each piece of data on a new line.
  $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email.\n"
                    "Subject: $subject.\n".
                      "User Message: $message.\n".;

  // This line sets the recipient's email address.                  
  $to = 'hunga1509@gmail.com';

  // These lines construct the email headers. 
  // The From header is set to the $email_from value, and the Reply-To header is set to the visitor's email address.
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";

  #send all information to the email id
  mail($to, $email_subject, $email_body, $headers);

  #where user at after submitting form, here we put users in the same page
  header("Location: contact.html");
?>