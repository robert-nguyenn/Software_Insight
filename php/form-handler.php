<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    // Your domain name
    $email_from = 'info@yourwebsite.com';

    // Email subject
    $email_subject = 'New Form Submission';

    // Construct the email body
    $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email.\n".
                  "User Message: $message.\n";

    // Recipient email address
    $to = 'robert.nguyeanh@gmail.com';

    // Email headers
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    // Send the email
    mail($to, $email_subject, $email_body, $headers);

    // Redirect back to the interview.html page
    header("Location: ../html/interview.html");
    exit();
  } else {
    echo "Invalid request method.";
  }
?>