var offset = 0;
var limit = 10;
function getActivity() {
	$.ajax({
		type: 'POST',
		url: '../../include/getAllActivity.php',
		data: {'limit': limit,
		'offset': offset,
		'datetime': new Date().Format('yyyy-MM-dd hh:mm:ss')},
		success: setList
	});
	function setList(data) {
		if (data == 'null' || data == '' || data == null || data == 0) {
			$("#more").attr('value', "全部加载完毕");
			return;
		}
		var array = eval(data);
		var html = '';
		$.each(array, function(index, item) {
			if (item['content'] == null || item['content'] == '') {
				html += "<li><h3>"+item['title']+"<span>"+item['datetime']+"</span></h3><p>没有内容哦</p><input type='button' class='parti' value='参加' onclick='participate("+item['activityid']+")' /></li>";
			} else {
				html += "<li><h3>"+item['title']+"<span>"+item['datetime']+"</span></h3><p>"+item['content']+"</p><input type='button' class='parti' value='参加' onclick='participate("+item['activityid']+")' /></li>";
			}
		});
		$(html).insertBefore("#more");
		offset += limit;
		if (array.length < limit) {
			$("#more").attr('value', "全部加载完毕");
		} else {
			$("#more").attr('value', "点击加载更多...");
		}
	}
}
function participate(id) {
	$.ajax({
		type: 'POST',
		url: '../../include/participate.php',
		data: {'id': id},
		success: function(data) {
			if (data == 1) {
				window.location.href = 'activity_list.php';
			} else {
				alert('Participate Error');
			}
		}
	});
}
$(function() {
	getActivity();
});