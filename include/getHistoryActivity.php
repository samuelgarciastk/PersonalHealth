<?php
$db = new SQLite3('../data/PersonalHealth.db');
$sql = "SELECT * FROM activity WHERE datetime <= '".$_POST['datetime']."' ORDER BY datetime DESC LIMIT ".$_POST['limit']." OFFSET ".$_POST['offset'].";";
$result = $db->query($sql);
$judge = false;
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
	$array[] = $row;
	$judge = true;
}
$db->close();
if ($judge)
	echo json_encode($array);
else
	echo 0;
?>