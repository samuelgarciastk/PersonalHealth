<?php
$db = new SQLite3('../data/PersonalHealth.db');
$sql = "UPDATE user SET authority=".$_POST['authority']." WHERE username='".$_POST['username']."';";
$db->exec($sql);
$num = $db->changes();
$db->close();
echo $num;
?>