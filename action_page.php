<!DOCTYPE html>
<html>
 <body>

 
<?php
$post = array(
	'title' => $_POST['title'], 
	'body' => $_POST['body']
);
echo "<h1>".$post['title']."</h1>";
echo "<p>".$post['body']."</p>";
echo "<hr />";
	 ?>

 </body>
 </html> 
