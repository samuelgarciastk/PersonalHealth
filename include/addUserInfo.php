<?php
session_start();
$nickname = $_POST['nickname'];
$sex = $_POST['sex'];
$birthday = $_POST['birthday'];
$sign = $_POST['sign'];
$db = new SQLite3('../data/PersonalHealth.db');
$sql = "UPDATE user SET nickname='".$nickname."', sex='".$sex."', birthday='".$birthday."', sign='".$sign."' WHERE username='".$_SESSION['user']."';";
$db->exec($sql);
$num = $db->changes();
$db->close();
echo $num;
?>