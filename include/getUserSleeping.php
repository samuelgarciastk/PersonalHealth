<?php
$db = new SQLite3('../data/PersonalHealth.db');
$sql = "SELECT date, totaltime, effective FROM sleeping WHERE username='".$_POST['user']."';";
$result = $db->query($sql);
$judge = false;
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    if (strtotime($row['date']) <= strtotime($_POST['end']) && strtotime($row['date']) >= strtotime($_POST['begin'])) {
        $array[] = $row;
        $judge = true;
    }
}
$db->close();
if ($judge)
    echo json_encode($array);
else
    echo 0;