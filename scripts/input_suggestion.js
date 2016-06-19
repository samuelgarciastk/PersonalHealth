function uploadFile() {
	$("span").removeClass('msg');
	var path = document.getElementById("file_data").value;
	if (path == '' || path == null || path == undefined) {
		showMsg('请选择文件');
		return;
	}
	path = '../../data/' + path.substring(11);
	showMsg('正在导入...');
	add(path);
}
function add(path) {
	var xmlhttp = new window.XMLHttpRequest();
	xmlhttp.open("GET", path, false);
	xmlhttp.send(null);
	var xmlDoc = xmlhttp.responseXML.documentElement;
	if (xmlDoc.tagName == 'health') {
		var user = xmlDoc.getElementsByTagName('user');
		var json_exercise = new Array();
		var json_body = new Array();
		var json_sleeping = new Array();
		for (var i = 0; i < user.length; i++) {
			var username = user[i].getAttribute('name');
			var date = user[i].getAttribute('date');
			var exercise = user[i].getElementsByTagName('exercise')[0];
			try {
				var runtime = exercise.getElementsByTagName('runtime')[0].childNodes[0].nodeValue;
			} catch(e) {
				var runtime = 0;
			}
			try {
				var cycletime = exercise.getElementsByTagName('cycletime')[0].childNodes[0].nodeValue;
			} catch(e) {
				var cycletime = 0;
			}
			json_exercise.push({'username': username,
			'date': date,
			'runtime': runtime,
			'cycletime': cycletime});
			var body = user[i].getElementsByTagName('body')[0];
			try {
				var weight = body.getElementsByTagName('weight')[0].childNodes[0].nodeValue;
			} catch(e) {
				var weight = 0;
			}
			try {
				var height = body.getElementsByTagName('height')[0].childNodes[0].nodeValue;
			} catch(e) {
				var height = 0;
			}
			try {
				var heartrate = body.getElementsByTagName('heartrate')[0].childNodes[0].nodeValue;
			} catch(e) {
				var heartrate = 0;
			}
			try {
				var bloodpressure = body.getElementsByTagName('bloodpressure')[0].childNodes[0].nodeValue;
			} catch(e) {
				var bloodpressure = 0;
			}
			json_body.push({'username': username,
			'date': date,
			'weight': weight,
			'height': height,
			'heartrate': heartrate,
			'bloodpressure': bloodpressure});
			var sleeping = user[i].getElementsByTagName('sleeping')[0];
			try {
				var totaltime = sleeping.getElementsByTagName('totaltime')[0].childNodes[0].nodeValue;
			} catch(e) {
				var totaltime = 0;
			}
			try {
				var effective = sleeping.getElementsByTagName('effective')[0].childNodes[0].nodeValue;
			} catch(e) {
				var effective = 0;
			}
			json_sleeping.push({'username': username,
			'date': date,
			'totaltime': totaltime,
			'effective': effective});
		}
		var end = 0;
		$.ajax({
			type: 'POST',
			url: '../../include/addExercise.php',
			data: {'json': json_exercise},
			async: false,
			success: function() {
				end += 1;
			}
		});
		$.ajax({
			type: 'POST',
			url: '../../include/addBody.php',
			data: {'json': json_body},
			async: false,
			success: function() {
				end += 1;
			}
		});
		$.ajax({
			type: 'POST',
			url: '../../include/addSleeping.php',
			data: {'json': json_sleeping},
			async: false,
			success: function() {
				end += 1;
			}
		});
		while (1) {
			if (end == 3) {
				showMsg('导入完成');
			}
			return;
		}
	} else if (xmlDoc.tagName == 'suggestion') {
		var advice = xmlDoc.getElementsByTagName('advice');
		var json = new Array();
		for (var i = 0; i < advice.length; i++) {
			try{
				var username = advice[i].getElementsByTagName('username')[0].childNodes[0].nodeValue;
			} catch(e) {
				var username = '';
			}
			var userfrom = advice[i].getElementsByTagName('userfrom')[0].childNodes[0].nodeValue;
			var datetime = advice[i].getElementsByTagName('datetime')[0].childNodes[0].nodeValue;
			var title = advice[i].getElementsByTagName('title')[0].childNodes[0].nodeValue;
			try {
				var content = advice[i].getElementsByTagName('content')[0].childNodes[0].nodeValue;
			} catch(e) {
				var content = '';
			}
			var isread = advice[i].getElementsByTagName('isread')[0].childNodes[0].nodeValue;
			var classType = advice[i].getElementsByTagName('class')[0].childNodes[0].nodeValue;
			json.push({'username': username,
			'userfrom': userfrom,
			'datetime': datetime,
			'title': title,
			'content': content,
			'isread': isread,
			'class': classType});
		}
		$.ajax({
			type: 'POST',
			url: '../../include/addMultiMsg.php',
			data: {'json': json},
			async: false,
			success: function() {
				showMsg('导入完成');
			}
		});
	} else {
		showMsg('文件格式不正确');
	}
}
function showMsg(msg) {
	var error = $("#error_msg");
	error.addClass('msg');
	error.text(msg);
}