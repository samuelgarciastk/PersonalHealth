<?php include '../../include/loginState.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>咚咕-要健康，用咚咕！</title>
	<link href="../../styles/global.css" rel="stylesheet">
	<link href="../../styles/authority_manage.css" rel="stylesheet">
	<script src="../../scripts/jquery-2.1.4.min.js"></script>
	<script src='../../scripts/global.js'></script>
	<script src='../../scripts/authority_manage.js'></script>
	<script src='../../scripts/canUse_authority_manage.js'></script>
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
							<a href="user_info.php" class="round">
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
			<p class="title">个人设置</p>
			<ul class="navigation">
				<li>
					<a href="user_info.php">
						<p>基本信息</p>
					</a>
				</li>
				<li>
					<a href="account_safety.php">
						<p>账号安全</p>
					</a>
				</li>
				<li>
					<a href="input_suggestion.php">
						<p>导入数据</p>
					</a>
				</li>
				<li class="authority" style="display: none">
					<a href="authority_manage.php" class="on">
						<p>权限管理</p>
					</a>
				</li>
				<li>
					<a href="../login.php?logout=1">
						<p>退出登录</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="content_r fl">
			<div class="title">权限管理</div>
			<span id="error_msg">&nbsp;</span>
			<form id="added_form" class="tc">
				<input type="text" id="userId" placeholder="用户名" />
				<div>
					<input type="radio" name="radio_auth" id="doctor" value="2" />
					<label for="doctor">医生</label>
					<input type="radio" name="radio_auth" id="coach" value="1" />
					<label for="coach">教练</label>
					<input type="radio" name="radio_auth" id="normal" value="3" />
					<label for="normal">普通用户</label>
				</div>
				<input type="button" value="提交" id="submit" onclick="changeAuth()" />
			</form>
		</div>
	</div>
	<div id="msg_bg"></div>
	<div id="msg_content"></div>
</body>
</html>
