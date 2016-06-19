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
			if (data == true) {
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
}
function canUse() {
	$.ajax({
		url: '../../include/getAuthority.php',
		success: function(data) {
			var num = eval(data)[0]['authority'];
			if (num == 0 || num == 1 || num == 2) {
				show();
			} else {
				showMsg('您没有权限');
			}
		}
	});
	function show() {
		html = "<form class='form_create'>";
		html += "<div><label>建议类型</label>";
		html +=	"<input type='radio' name='msg_type' id='system_msg' value='0' onchange='changeType()'' checked='checked'>";
		html += "<label for='system_msg' class='special'>系统建议</label>";
		html += "<input type='radio' name='msg_type' id='user_msg' value='1' onchange='changeType()'>";
		html += "<label for='user_msg' class='special'>用户建议</label></div>";
		html += "<div><label for='form_title'>建议题目</label>";
		html += "<input type='text' id='form_title'></div>";
		html += "<div><label for='form_content'>建议内容</label>";
		html += "<textarea id='form_content' cols='' rows=''></textarea></div>";
		html += "<input type='button' id='save' value='提交'' onclick='createMessage()'></form>";
		$(".content_r").append(html);
	}
}
$(function() {
	canUse();
});