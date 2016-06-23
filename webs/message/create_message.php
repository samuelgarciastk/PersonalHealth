<?php include '../../include/loginState.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>咚咕-要健康，用咚咕！</title>
	<link href="../../styles/global.css" rel="stylesheet">
	<link href="../../styles/create_message.css" rel="stylesheet">
	<script src="../../scripts/jquery-2.1.4.min.js"></script>
	<script src='../../scripts/global.js'></script>
	<script src='../../scripts/create_message.js'></script>
	<script src='../../scripts/canUse_create_message.js'></script>
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
							<a href="../activity/activity_list.php">活动</a>
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
			<p class="title">消息中心</p>
			<ul class="navigation">
				<li>
					<a href="message_notification.php">
						<p>我的通知</p>
					</a>
				</li>
				<li>
					<a href="message_suggestion.php">
						<p>我的建议</p>
					</a>
				</li>
				<li class="authority" style="display: none">
					<a href="create_message.php" class="on">
						<p>提出建议</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="content_r fl">
			<div class="title">提出建议</div>
			<span id="error_msg">&nbsp;</span>
			<form class="form_create">
				<div>
					<label>建议类型</label>
					<input type="radio" name="msg_type" id="system_msg" value="0" onchange="changeType()" checked="checked">
					<label for="system_msg" class="special">系统建议</label>
					<input type="radio" name="msg_type" id="user_msg" value="1" onchange="changeType()">
					<label for="user_msg" class="special">用户建议</label>
				</div>
				<div>
					<label for="form_title">建议题目</label>
					<input type="text" id="form_title">
				</div>
				<div>
					<label for="form_content">建议内容</label>
					<textarea id="form_content" cols="" rows=""></textarea>
				</div>
				<input type="button" id="save" value="提交" onclick="createMessage()">
			</form>
		</div>
	</div>
	<div id="msg_bg"></div>
	<div id="msg_content"></div>
</body>
</html>