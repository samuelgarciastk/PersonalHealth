<?php
session_start();
$username = $_POST['username'];
$datetime = $_POST['datetime'];
$title = $_POST['title'];
$content = $_POST['content'];
$class = $_POST['class'];
$db = new SQLite3('../data/PersonalHealth.db');
$sql = "INSERT INTO message (username, userfrom, datetime, title, content, isread, class) VALUES ('".$username."', '".$_SESSION['user']."', '".$datetime."', '".$title."', '".$content."', 0, ".$class.");";
$result = $db->exec($sql);
$db->close();
return $result;
?>