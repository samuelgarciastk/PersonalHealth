function addUserInfo() {
	var nickname = $("#nickname").val();
	var sex = $("input[name='sex']:checked").val();
	var birthday = $("#birthday").get(0).value;
	var sign = $("#sign").val();
	$.ajax({
		type: 'POST',
		url: '../../include/addUserInfo.php',
		data: {'nickname': nickname,
		'sex': sex,
		'birthday': birthday,
		'sign': sign},
		success: function(data) {
			if (data == 0) {
				alertMsg('更新失败');
			} else {
				alertMsg('更新成功');
			}
		}
	});
}
function alertMsg(msg) {
	var error = $("#update_msg");
	error.addClass('msg');
	error.text(msg);
}
function getUserInfo() {
	$.ajax({
		url: '../../include/getUserInfo.php',
		success: setInfo
	});
	function setInfo(data) {
		var array = eval(data);
		$("#nickname").attr('value', array[0].nickname);
		$("input[name='sex'][value="+array[0].sex+"]").attr('checked', true);
		$("#birthday").get(0).value = array[0].birthday;
		$("#sign").text(array[0].sign);
	}
}
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==13){
    	$("#save").click();
    }
};
$(function() {
	getUserInfo();
});