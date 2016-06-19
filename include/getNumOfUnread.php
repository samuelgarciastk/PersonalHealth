<?php
session_start();
$db = new SQLite3('../data/PersonalHealth.db');
$sql = "SELECT count(*) FROM message WHERE username='".$_SESSION['user']."' and isread=0;";
$result = $db->querySingle($sql);
$db->close();
echo $result;
?>