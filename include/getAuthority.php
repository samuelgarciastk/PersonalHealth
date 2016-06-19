<?php
session_start();
$db = new SQLite3('../data/PersonalHealth.db');
$sql = "SELECT authority FROM user WHERE username='".$_SESSION['user']."';";
$result = $db->query($sql);
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
	$array[] = $row;
}
$db->close();
echo json_encode($array);
?>