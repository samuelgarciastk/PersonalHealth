<?php
session_start();
$old = md5($_POST['old']);
$new = md5($_POST['new']);
$db = new SQLite3('../data/PersonalHealth.db');
$sql = "UPDATE user SET password='".$new."' WHERE username='".$_SESSION['user']."' and password='".$old."';";
$db->exec($sql);
$num = $db->changes();
$db->close();
echo $num;
?>