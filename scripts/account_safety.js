function changePassword() {
	var old = $("#old_pw").val();
	var newpw = $("#new_pw").val();
	var confirmed = $("#confirm_pw").val();
	if (old === '' || old === null ||
		newpw === '' || newpw === null ||
		confirmed === '' || confirmed === null) {
		alertMsg('请填写完整');
		return;
	}
	if (newpw !== confirmed) {
		alertMsg('确认密码不匹配');
		return;
	}
	$.ajax({
		type: 'POST',
		url: '../../include/changePassword.php',
		data: {'old': old,
		'new': newpw},
		success: function(data) {
			if (data == 0) {
				alertMsg('原密码错误');
			} else {
				alertMsg('修改成功');
				window.location.href = '../login.php?logout=1';
			}
		}
	});
}
function alertMsg(msg) {
	var error = $("#change_msg");
	error.addClass('msg');
	error.text(msg);
}
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==13){
    	$("#save").click();
    }
};