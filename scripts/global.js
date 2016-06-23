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
function goTop() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100)
            $("#gotop").fadeIn(500);
        else
            $("#gotop").fadeOut(500);
    });
}
$(function() {
    getPortrait();
    getMessage();
    goTop();
    $("#gotop").click(function() {
        $('body, html').animate({scrollTop:0}, 500);
    })
    $("#gotop").mouseover(function() {
        $(this).css("background","url(../../images/backtop.png) no-repeat 0px 0px");
    });
    $("#gotop").mouseout(function() {
        $(this).css("background","url(../../images/backtop.png) no-repeat -70px 0px");
    });
    $("#msg_bg").click(function () {
        $("#msg_bg").fadeOut(200);
        $("#msg_content").fadeOut(400);
    })
});
