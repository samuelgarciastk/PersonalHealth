<?php 
include '../../include/loginState.php';
session_start();
$db = new SQLite3('../../data/PersonalHealth.db');
$sql = "SELECT authority FROM user WHERE username='".$_SESSION['user']."';";
$result = $db->query($sql);
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    $array[] = $row;
}
$db->close();
if ($array[0]['authority'] == 1)
    header('location:manage_doctor.php');
else
    header('location:manage_coach.php');
