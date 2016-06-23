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
