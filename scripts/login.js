function checkAccount() {
	$.ajax({
		type: 'POST',
		url: window.location.href,
		data: {'username': $("#userId").val(),
		'password': $("#password").val(),
		'remember': $("#remember").prop('checked')},
		success: function(data) {
			if (data) {
				window.location.href = '../webs/health/health_sport.php';
			} else {
				alertError();
			}
		}
	});
}
function alertError() {
	var error = $("#form_login span").eq(0);
	error.addClass('error_msg');
	error.text('请输入正确的用户名和密码');
}
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==13){
    	$("#login").click();
    }
};