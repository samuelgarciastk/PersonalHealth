Date.prototype.Format = function(fmt)
{
  var o = {
    "M+" : this.getMonth()+1,
    "d+" : this.getDate(),
    "h+" : this.getHours(),
    "m+" : this.getMinutes(),
    "s+" : this.getSeconds(),
    "q+" : Math.floor((this.getMonth()+3)/3),
    "S"  : this.getMilliseconds()
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
};
function getPortrait() {
    $.ajax({
        url: '../../include/getPortrait.php',
        success: function(data) {
            setPortrait(data);
        }
    });
    function setPortrait(data) {
        var path = eval(data)[0].portrait;
        if (path === '' || path === undefined || path === null) {
            $("#user_portrait").attr('src', "../../data/portrait/blank_portrait.jpg");
        } else {
            $("#user_portrait").attr('src', path);
        }
    }
}
function getMessage() {
    $.ajax({
        url: '../../include/getNumOfUnread.php',
        success: function(data) {
            $("#user_message").html(data);
        }
    });
}
$(function() {
	getPortrait();
	getMessage();
});