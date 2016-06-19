<?php
$username = $_POST['username'];
$password = md5($_POST['password']);
$authority = $_POST['authority'];
$db = new SQLite3('../data/PersonalHealth.db');
$sql = "INSERT INTO user(username, password, authority) VALUES ('".$username."','".$password."','".$authority."');";
$result = $db->exec($sql);
$db->close();
echo $result;
?>