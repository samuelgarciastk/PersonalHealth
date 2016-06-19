<?php include '../../include/loginState.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>咚咕-要健康，用咚咕！</title>
	<link href="../../styles/global.css" rel="stylesheet">
	<link href="../../styles/create_activity.css" rel="stylesheet">
	<script src="../../scripts/jquery-2.1.4.min.js"></script>
	<script src='../../scripts/global.js'></script>
	<script src='../../scripts/create_activity.js'></script>
</head>
<body>
	<div class="header_bg">
		<div class="header_repeat">
			<div class="header">
				<div class="logo fl"></div>
				<div class="menu fl">
					<ul>
						<li class="fl tc">
							<a href="../health/health_sport.php">运动</a>
						</li>
						<li class="fl tc">
							<a href="activity_list.php" class="on">活动</a>
						</li>
					</ul>
				</div>
				<div class="user_box">
					<ul>
						<li class="fl tc pr">
							<a href="../user/user_info.php" class="round">
								<img src="../../data/portrait/blank_portrait.jpg" id="user_portrait">
							</a>
						</li>
						<li class="fl tc">
							<a href="../message/message_notification.php" class="rectangle">
								<span class="msg_num" id="user_message">0</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="content">
		<div class="content_l fl">
			<p class="title">活动管理</p>
			<ul class="navigation">
				<li>
					<a href="activity_list.php">
						<p>全部活动</p>
					</a>
				</li>
				<li>
					<a href="activity_mine.php">
						<p>我的活动</p>
					</a>
				</li>
				<li>
					<a href="activity_history.php">
						<p>历史活动</p>
					</a>
				</li>
				<li>
					<a href="create_activity.php" class="on">
						<p>创建活动</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="content_r fl">
			<div class="title">创建活动</div>
			<span id="error_msg">&nbsp;</span>
			<form class="form_create">
				<div>
					<label for="form_date">活动时间</label>
					<input type="date" id="form_date">
					<input type="time" id="form_time">
				</div>
				<div>
					<label for="form_title">活动题目</label>
					<input type="text" id="form_title">
				</div>
				<div>
					<label for="form_content">活动内容</label>
					<textarea id="form_content" cols="" rows=""></textarea>
				</div>
				<input type="button" id="save" value="提交" onclick="createActivity()">
			</form>
		</div>
	</div>
</body>
</html>