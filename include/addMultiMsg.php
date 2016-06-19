<?php
$json = $_POST['json'];
$length = count($json);
$db = new SQLite3('../data/PersonalHealth.db');
for ($i = 0; $i < $length; $i++) {
	$sql = "INSERT INTO message (username, userfrom, datetime, title, content, isread, class) VALUES ('".$json[$i]['username']."', '".$json[$i]['userfrom']."', '".$json[$i]['datetime']."', '".$json[$i]['title']."', '".$json[$i]['content']."', ".$json[$i]['isread'].", ".$json[$i]['class'].");";
	$db->exec($sql);
}
$db->close();
?>