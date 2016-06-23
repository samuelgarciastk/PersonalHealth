function createActivity() {
	var title = $("#form_title").val();
	var content = $("#form_content").val();
	var date = $("#form_date").get(0).value;
	var time = $("#form_time").get(0).value;
	if (title == '' || title == null || title == undefined) {
		showMsg('请输入活动题目');
		return;
	}
	if (date == '' || date == null || date == undefined || time == '' || time == null || time == undefined) {
		showMsg('请输入活动时间');
		return;
	}
	$.ajax({
		type: 'POST',
		url: '../../include/addActivity.php',
		data: {'datetime': date+' '+time+':00',
		'title': title,
		'content': content},
		success: function(data) {
			if (data == true) {
				showMsg('创建活动成功');
			} else {
				showMsg('无法创建活动');
			}
		}
	});
}
function showMsg(msg) {
	var error = $("#error_msg");
	error.addClass('msg');
	error.text(msg);
	$("#msg_bg").fadeIn(200);
	$("#msg_content").fadeIn(400);
	$("#msg_content").text(msg);
	setTimeout(function () {
		$("#msg_bg").fadeOut(200);
		$("#msg_content").fadeOut(400);
	}, 5000);
}