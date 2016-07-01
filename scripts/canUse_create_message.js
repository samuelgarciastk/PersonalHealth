/**
 * Created by stk on 2016/6/23.
 */
function canUse() {
    $.ajax({
        url: '../../include/getAuthority.php',
        success: function(data) {
            var num = eval(data)[0]['authority'];
            if (num == 3) {
                $(".authority").text("我要提问");
                $(".link").attr("href", "create_question.php");
            }
        }
    });
}
$(function () {
    canUse();
});