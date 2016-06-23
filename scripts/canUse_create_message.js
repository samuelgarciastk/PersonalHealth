/**
 * Created by stk on 2016/6/23.
 */
function canUse() {
    $.ajax({
        url: '../../include/getAuthority.php',
        success: function(data) {
            var num = eval(data)[0]['authority'];
            if (num == 0 || num == 1 || num == 2) {
                $(".authority").show();
            }
        }
    });
}
$(function () {
    canUse();
});