<?php
$json = $_POST['json'];
$length = count($json);
$db = new SQLite3('../data/PersonalHealth.db');
for ($i = 0; $i < $length; $i++) {
	$sql = "INSERT INTO sleeping (username, date, totaltime, effective) VALUES ('".$json[$i]['username']."', '".$json[$i]['date']."', ".$json[$i]['totaltime'].", ".$json[$i]['effective'].");";
	$db->exec($sql);
}
$db->close();
?>