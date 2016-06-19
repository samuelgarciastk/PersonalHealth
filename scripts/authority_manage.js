function canUse() {
	$.ajax({
		url: '../../include/getAuthority.php',
		success: function(data) {
			var num = eval(data)[0]['authority'];
			if (num == 0) {
				show();
			} else {
				showMsg('您没有权限');
			}
		}
	});
	function show() {
		html = "<form id='added_form' class='tc'>";
		html += "<input type='text' id='userId' placeholder='用户名' />";
		html += "<div><input type='radio' name='radio_auth' id='doctor' value='2' /><label for='doctor'>医生</label>";
		html += "<input type='radio' name='radio_auth' id='coach' value='1' /><label for='coach'>教练</label>";
		html += "<input type='radio' name='radio_auth' id='normal' value='3' /><label for='normal'>普通用户</label>";
		html += "</div><input type='button' value='提交' id='submit' onclick='changeAuth()' /></form>";
		$(".content_r").append(html);
	}
}
function showMsg(msg) {
	var error = $("#error_msg");
	error.addClass('msg');
	error.text(msg);
}
function changeAuth() {
	var username = $("#userId").val();
	var authority = $("input[name='radio_auth']:checked").val();
	if (username == null || username == '' || username == undefined) {
		showMsg('请输入用户名');
		return;
	}
	if (authority == undefined) {
		showMsg('请选择权限');
		return;
	}
	$.ajax({
		type: 'POST',
		url: '../../include/setAuthority.php',
		data: {'username': username,
		'authority': authority},
		success: function(data) {
			if (data == 0) {
				showMsg('用户不存在，修改失败');
			} else {
				showMsg('修改成功');
			}
		}
	});
}
$(function() {
	canUse();
});