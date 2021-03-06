<?php include '../../include/loginState.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>咚咕-要健康，用咚咕！</title>
	<link href="../../styles/global.css" rel="stylesheet">
	<link href="../../styles/health_condition.css" rel="stylesheet">
	<script src="../../scripts/jquery-2.1.4.min.js"></script>
	<script src='../../scripts/global.js'></script>
	<script src="../../scripts/Chartjs/Chart.js"></script>
	<script src="../../scripts/health_condition.js"></script>
</head>
<body>
	<div class="header_bg">
		<div class="header_repeat">
			<div class="header">
				<div class="logo fl"></div>
				<div class="menu fl">
					<ul>
						<li class="fl tc">
							<a href="health_sport.php" class="on">运动</a>
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
			<p class="title">健康管理</p>
			<ul class="navigation">
				<li>
					<a href="health_sport.php">
						<p>我的运动</p>
					</a>
				</li>
				<li>
					<a href="health_condition.php" class="on">
						<p>身体状况</p>
					</a>
				</li>
				<li>
					<a href="health_sleeping.php">
						<p>睡眠分析</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="content_r fl">
			<div>
				<select class="select_condition" id="select_single" onchange="getDateState()">
					<option value="height">身高</option>
					<option value="weight">体重</option>
					<option value="heartrate">心率</option>
					<option value="bloodpressure">血压</option>
				</select>
				<p>状况</p>
				<input type="date" class="date" id="pointday" onchange="getDateState()">
				<p class="unit" id="unit_first">&nbsp;</p>
				<canvas id="singleday"></canvas>
			</div>
			<div>
				<select class="select_condition" id="select_history" onchange="getHistoryState(0)">
					<option value="height">身高</option>
					<option value="weight">体重</option>
					<option value="heartrate">心率</option>
					<option value="bloodpressure">血压</option>
				</select>
				<p>状态曲线图</p>
				<input type="date" class="date" id="beginday" onchange="getHistoryState(0)">
				-
				<input type="date" class="date" id="endday" onchange="getHistoryState(1)">
				<p class="unit" id="unit_second">&nbsp;</p>
				<canvas id="history"></canvas>
			</div>
		</div>
	</div>
</body>
</html>