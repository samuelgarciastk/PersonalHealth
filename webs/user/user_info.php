<?php include '../../include/loginState.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>咚咕-要健康，用咚咕！</title>
	<link href="../../styles/global.css" rel="stylesheet">
	<link href="../../styles/user_info.css" rel="stylesheet">
	<script src="../../scripts/jquery-2.1.4.min.js"></script>
	<script src='../../scripts/global.js'></script>
	<script src='../../scripts/user_info.js'></script>
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
						<li class="fl tc attention" style="display: none">
							<a href="../manage/manage_link.php">关注</a>
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
					<a href="user_info.php" class="on">
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
					<a href="authority_manage.php">
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
			<div class="tab">
				<a href="javascript:;" class="info">个人资料</a>
				<a href="user_portrait.php" class="portrait">头像设置</a>
			</div>
			<form class="form_info">
				<span id="update_msg">&nbsp;</span>
				<div class="special">
					<label for="nickname">昵称</label>
					<input type="text" id="nickname" >
				</div>
				<div>
					<label for="male">性别</label>
					<input type="radio" name="sex" id="male" value="1">
					<label for="male" class="choice">男</label>
					<input type="radio" name="sex" id="female" value="0">
					<label for="female" class="choice">女</label>
				</div>
				<div>
					<label for="birthday">生日</label>
					<input type="date" id="birthday">
				</div>
				<div>
					<label for="sign">个性签名</label>
					<textarea id="sign" cols="" rows=""></textarea>
				</div>
				<input type="button" id="save" value="保存" onclick="addUserInfo()">
			</form>
		</div>
	</div>
	<div id="msg_bg"></div>
	<div id="msg_content"></div>
</body>
</html>