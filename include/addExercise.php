<?php
$json = $_POST['json'];
$length = count($json);
$db = new SQLite3('../data/PersonalHealth.db');
for ($i = 0; $i < $length; $i++) {
	$sql = "INSERT INTO exercise (username, date, runtime, cycletime) VALUES ('".$json[$i]['username']."', '".$json[$i]['date']."', ".$json[$i]['runtime'].", ".$json[$i]['cycletime'].");";
	$db->exec($sql);
}
$db->close();
?>