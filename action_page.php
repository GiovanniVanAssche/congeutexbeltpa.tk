<!DOCTYPE html>
<html>
 <body>

 
<?php
	 $ sudo su
$ a2enmod php5
$post = array(
	'title' => $GET['title'], 
	'body' => $GET['body']
);
echo "<h1>".$post['title']."</h1>";
echo "<p>".$post['body']."</p>";
echo "<hr />";
	 ?>

 </body>
 </html> 
