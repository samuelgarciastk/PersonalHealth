<?php
session_start();
$db = new SQLite3('../data/PersonalHealth.db');
$sql = "INSERT INTO participator (activityid, username) VALUES (".$_POST['id'].", '".$_SESSION['user']."');";
$result = $db->exec($sql);
$db->close();
echo $result;
?>