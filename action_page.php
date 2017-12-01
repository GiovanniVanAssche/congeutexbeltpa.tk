<!DOCTYPE html>
<html>
 <body>
  <?php
 
 // First, include Requests
include('../library/Requests.php');
// Next, make sure Requests can load internal classes
Requests::register_autoloader();

?>
 Welkom <?php echo $_POST[uname]; ?><br>
 Your email address is: <?php echo $_POST[psw]; ?>

 </body>
 </html> 
