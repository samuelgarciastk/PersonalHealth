/**
 * Created by stk on 2016/6/23.
 */
function showMsg(msg) {
    var error = $("#update_msg");
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