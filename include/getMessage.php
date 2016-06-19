<?php
session_start();
$db = new SQLite3('../data/PersonalHealth.db');
if ($_POST['class'] == 0) {
	$sql = "SELECT * FROM message WHERE class=".$_POST['class']." ORDER BY datetime DESC LIMIT ".$_POST['limit']." OFFSET ".$_POST['offset'].";";
} else {
	$sql = "SELECT * FROM message WHERE username='".$_SESSION['user']."' and class=".$_POST['class']." ORDER BY datetime DESC LIMIT ".$_POST['limit']." OFFSET ".$_POST['offset'].";";
}
$result = $db->query($sql);
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
	$array[] = $row;
}
$db->close();
echo json_encode($array);
?>