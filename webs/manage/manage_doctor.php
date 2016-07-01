<?php include '../../include/loginState.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>咚咕-要健康，用咚咕！</title>
    <link href="../../styles/global.css" rel="stylesheet">
    <link href="../../styles/health_sleeping.css" rel="stylesheet">
    <script src="../../scripts/jquery-2.1.4.min.js"></script>
    <script src='../../scripts/global.js'></script>
    <script src="../../scripts/Chartjs/Chart.js"></script>
    <script src="../../scripts/manage_doctor.js"></script>
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
                    <li class="fl tc attention">
                        <a href="manage_link.php" class="on">关注</a>
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
        <p class="title">关注列表</p>
        <ul class="navigation">
            <li>
                <a class="on" onclick="changeUser('Isaac', 1)" id="li1">
                    <p style="margin-left: 65px">Isaac</p>
                </a>
            </li>
            <li>
                <a onclick="changeUser('Zed', 2)" id="li2">
                    <p style="margin-left: 65px">Zed</p>
                </a>
            </li>
        </ul>
    </div>
    <div class="content_r fl">
        <div class="content_block">
            <p class="title">睡眠状况</p>
            <input type="date" class="date" id="pointday" onchange="getDateState()">
            <div class="time_content">
                <canvas id="singleday" class="fl"></canvas>
                <div class="fl show_time">
                    <p>睡眠总时间</p>
                    <span id="text_total">0 分钟</span>
                </div>
                <div class="fl show_time">
                    <p>睡眠有效时间</p>
                    <span id="text_effective">0 分钟</span>
                </div>
                <div class="fl show_time">
                    <p>睡眠效率</p>
                    <span id="text_percent">0 %</span>
                </div>
            </div>
        </div>
        <div class="content_block">
            <p class="title">睡眠曲线图</p>
            <input type="date" class="date" id="beginday" onchange="getHistoryState(0)">
            -
            <input type="date" class="date" id="endday" onchange="getHistoryState(1)">
            <p class="unit">(单位: 分钟)</p>
            <canvas id="history"></canvas>
            <div id="legend">
                <ul>
                    <li>
                        <span id="total">&nbsp;</span>
                        <p>总时间</p>
                    </li>
                    <li>
                        <span id="effective">&nbsp;</span>
                        <p>有效时间</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</body>
</html>