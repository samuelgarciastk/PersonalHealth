<?php
function userExist($name, $psw) {
	$db = new SQLite3('../data/PersonalHealth.db');
	$sql = "SELECT username, password FROM user WHERE username='".$name."';";
	$result = $db->query($sql);
	while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
		if ($row['password'] == $psw) {
			$db->close();
			return true;
		}
	}
	$db->close();
	return false;
}
function _get($str) {
	return !empty($_GET[$str]) ? $_GET[$str] : null;
}
session_start();
if (_get('logout') == 1) {
	session_unset();
	session_destroy();
	setcookie('username', '');
	setcookie('password', '');
	header('location:login.php');
	exit();
} else {
	if (isset($_POST['username'])) {
		$username = $_POST['username'];
		$password = md5($_POST['password']);
		$login = userExist($username, $password);
		if ($login) {
			$_SESSION['user'] = $username;
			if ($_POST['remember'] == 'true') {
				setcookie('username', $username, time() + 3600*24*10);
				setcookie('password', $password, time() + 3600*24*10);
			}
		}
		echo $login;
		exit();
	} else {
		if (isset($_SESSION['user'])) {
			header('location:health/health_sport.php');
		} else {
			if (!empty($_COOKIE['username']) && !empty($_COOKIE['password'])) {
				$login = userExist($_COOKIE['username'], $_COOKIE['password']);
				if ($login) {
					$_SESSION['user'] = $_COOKIE['username'];
					header('location:health/health_sport.php');
				}
			}
		}
	}
}
?>