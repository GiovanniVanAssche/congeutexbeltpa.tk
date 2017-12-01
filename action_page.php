<!DOCTYPE html>
<html>
 <body>

 
<?php
$post = array(
	'uname' => $POST['uname'], 
	'psw' => $POST['psw']
);
echo "<h1>".$post['title']."</h1>";
echo "<p>".$post['body']."</p>";
echo "<hr />";
?>

 </body>
 </html> 
