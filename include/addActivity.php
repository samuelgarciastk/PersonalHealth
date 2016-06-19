<?php
$db = new SQLite3('../data/PersonalHealth.db');
$sql = "INSERT INTO activity (datetime, title, content) VALUES ('".$_POST['datetime']."', '".$_POST['title']."', '".$_POST['content']."');";
$result = $db->exec($sql);
$db->close();
echo $result;
?>