<?php
session_start();
$db = new SQLite3('../data/PersonalHealth.db');
$sql = "DELETE FROM participator WHERE activityid=".$_POST['id']." and username='".$_SESSION['user']."';";
$result = $db->exec($sql);
$db->close();
echo $result;
?>