<?php
$json = $_POST['json'];
$length = count($json);
$db = new SQLite3('../data/PersonalHealth.db');
for ($i = 0; $i < $length; $i++) {
	$sql = "UPDATE message SET isread=1 WHERE username='".$json[$i]['username']."' and userfrom='".$json[$i]['userfrom']."' and datetime='".$json[$i]['datetime']."' and title='".$json[$i]['title']."' and content='".$json[$i]['content']."' and class=".$json[$i]['class'].";";
	$db->exec($sql);
}
$db->close();
?>