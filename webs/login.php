<?php include '../include/checkLogin.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>咚咕-要健康，用咚咕！</title>
	<link href="../styles/login.css" rel="stylesheet">
	<script src="../scripts/jquery-2.1.4.min.js"></script>
	<script src="../scripts/login.js"></script>
</head>
<body>
	<header>
		<div class="top_bg"></div>
	</header>
	<div class="content">
		<div class="line">
			<div class="title tc">登录</div>
		</div>
		<div class="content_bg">
			<div class="content-l fl tc">
				<img src="../images/blank_portrait.png" alt="advertisement">
			</div>
			<div class="content-r">
				<form id="form_login">
					<div>
						<input type="text" id="userId" class="inputtxt" placeholder="用户名" name="username">
					</div>
					<div>
						<input type="password" id="password" class="inputtxt" placeholder="密码" name="password">
					</div>
					<div>
						<input type="checkbox" id="remember">
						<label for="remember">记住我</label>
						<span>&nbsp;</span>
					</div>
					<input type="button" value="登录" id="login" onclick="checkAccount()">
					<a href="register.html" id="register">注册</a>
				</form>
			</div>
		</div>
	</div>
</body>
</html>