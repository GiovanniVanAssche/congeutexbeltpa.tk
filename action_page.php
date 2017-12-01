<!DOCTYPE html>
<html>
 <body>
  <?php
 
 // First, include Requests
include('../library/Requests.php');
// Next, make sure Requests can load internal classes
Requests::register_autoloader();

// Now let's make a request!
$request = Requests::post('login.html', array('Accept' => 'application/json'));
// Check what we received
var_dump($request);
  
  ?>

 </body>
 </html> 
