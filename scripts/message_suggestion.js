var offset = 0;
var limit = 10;
function getSuggestion() {
	$.ajax({
		type: 'POST',
		url: '../../include/getMessage.php',
		data: {'limit': limit,
		'offset': offset,
		'class': 1},
		success: setList
	});
	function setList(data) {
		if (data == 'null' || data == '' || data == null) {
			$("#more").attr('value', "全部加载完毕");
			return;
		}
		var array = eval(data);
		var html = '';
		var json = new Array();
		$.each(array, function(index, item) {
			var content;
			if (item['content'] == null || item['content'] == '') {
				content = '没有内容哦';
			} else {
				content = item['content'];
			}
			html += "<li class='state"+item['isread']+"'><h3>来自: "+item['userfrom']+"<span>"+item['datetime']+"</span></h3><h4>"+item['title']+"</h4><p>"+content+"</p></li>";
			json.push({'username': item['username'], 'userfrom': item['userfrom'], 'datetime': item['datetime'], 'title': item['title'], 'content': item['content'], 'class': item['class']});
		});
		$.ajax({
			type: 'POST',
			url: '../../include/setRead.php',
			data: {'json': json},
			success: getMessage
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
$(function() {
	getSuggestion();
});