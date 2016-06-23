function createMessage() {
	var title = $("#form_title").val();
	var content = $("#form_content").val();
	var user = $("#form_user").val();
	var classType = $("input[name='msg_type']:checked").val();
	if (title == '' || title == null || title == undefined) {
		showMsg('请输入建议题目');
		return;
	}
	if (classType == 1) {
		if (user == '' || user == null || user == undefined) {
			showMsg('请输入接收建议的用户');
			return;
		}
	}
	$.ajax({
		type: 'POST',
		url: '../../include/addMessage.php',
		data: {'username': user,
		'datetime': new Date().Format('yyyy-MM-dd hh:mm:ss'),
		'title': title,
		'content': content,
		'class': classType},
		success: function(data) {
			if (data) {
				showMsg('提出建议成功');
			} else {
				showMsg('无法提出建议');
			}
		}
	});
}
function changeType() {
	if ($("input[name='msg_type']:checked").val() == 1) {
		html = "<div><label for='form_user'>建议接受者</label><input type='text' id='form_user'></div>";
		$(html).insertAfter($($(".form_create").children("div").get(0)));
	} else {
		$($(".form_create").children("div").get(1)).remove();
	}
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
