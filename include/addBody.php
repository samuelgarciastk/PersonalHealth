<?php
$json = $_POST['json'];
$length = count($json);
$db = new SQLite3('../data/PersonalHealth.db');
for ($i = 0; $i < $length; $i++) {
	$sql = "INSERT INTO body (username, date, weight, height, heartrate, bloodpressure) VALUES ('".$json[$i]['username']."', '".$json[$i]['date']."', ".$json[$i]['weight'].", ".$json[$i]['height'].", ".$json[$i]['heartrate'].", ".$json[$i]['bloodpressure'].");";
	$db->exec($sql);
}
$db->close();
?>