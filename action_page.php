<!DOCTYPE html>
<html>
 <body>

 
<?php
$post = array(
	'title' => $POST['title'], 
	'body' => $POST['body']
);
echo "<h1>".$post['title']."</h1>";
echo "<p>".$post['body']."</p>";
echo "<hr />";
	 ?>

 </body>
 </html> 
