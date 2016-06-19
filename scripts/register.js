function registerUser() {
	$("span").removeClass('error_msg');
	var userId = $("#userId").val();
	var password = $("#password").val();
	var confirm_pw = $("#confirm_pw").val();
	if (userId === '' || userId === null) {
		alertError('#error_id', '用户名不能为空');
		return;
	}
	if (password === '' || password === null) {
		alertError('#error_pw', '密码不能为空');
		return;
	}
	if (confirm_pw === '' || confirm_pw === null) {
		alertError('#error_confirm', '请确认密码');
		return;
	}
	if (password !== confirm_pw) {
		alertError('#error_confirm', '确认密码不匹配');
		return;
	}
	$.ajax({
		type: 'POST',
		url: '../include/registerUser.php',
		data: {'username': userId,
		'password': password,
		'authority': $("input[name='radio']:checked").val()},
		success: function(data) {
			if (data == true) {
				window.location.href = '../webs/login.php';
			} else {
				alertError('#error_total', '用户名重复，注册失败');
			}
		}
	});
}
function alertError(element, msg) {
	var error = $(element);
	error.addClass('error_msg');
	error.text(msg);
}
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==13){
    	$("#register").click();
    }
};