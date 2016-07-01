var pieChart;
var lineChart;
var defaultDay = 20;
var id = "Isaac";
function showPieChart(date) {
    $.ajax({
        type: 'POST',
        url: '../../include/getUserSleeping.php',
        data: {'begin': date,
            'end': date,
            'user': id},
        success: paintPie
    });
    function paintPie(array) {
        var info;
        var jToA = eval(array);
        var effective, blank;
        if (array == 0) {
            effective = 0;
            blank = 100;
            $("#text_total").html('0 分钟');
            $("#text_effective").html('0 分钟');
            $("#text_percent").html('0 %');
        } else {
            effective = ((jToA[0].effective / jToA[0].totaltime) * 100).toFixed(2);
            blank = (100 - effective).toFixed(2);
            $("#text_total").html(jToA[0].totaltime + ' 分钟');
            $("#text_effective").html(jToA[0].effective + ' 分钟');
            $("#text_percent").html(effective + ' %');
        }
        var ctx = $("#singleday").get(0).getContext("2d");
        var data = [
            {
                value: effective,
                color:"#BEC0FF",
                highlight: "#9599FF",
                label: "睡眠效率"
            },
            {
                value: blank,
                color: "#EBEBEB",
                highlight: "#D6D6D6",
                label: ""
            }
        ];
        pieChart = new Chart(ctx).Doughnut(data, {
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>%"
        });
    }
}
function showLineChart(begin, end) {
    $.ajax({
        type: 'POST',
        url: '../../include/getUserSleeping.php',
        data: {'begin': begin,
            'end': end,
            'user': id},
        success: paintLine
    });
    function paintLine(array) {
        var currentDay = new Date(begin +' 00:00:00');
        var endDay = new Date(end +' 00:00:00');
        var label = new Array();
        while (currentDay <= endDay) {
            label.push(currentDay.Format('yyyy-MM-dd'));
            currentDay.setDate(currentDay.getDate() + 1);
        }
        var jToA = eval(array);
        var info1 = new Array();
        var info2 = new Array();
        for (i = 0; i < label.length; i++) {
            var hasDate = false;
            if (jToA !== null) {
                for (j = 0; j < jToA.length; j++) {
                    if (jToA[j].date == label[i]) {
                        hasDate = true;
                        break;
                    }
                }
            }
            if (hasDate) {
                info1.push(jToA[j].totaltime);
                info2.push(jToA[j].effective);
            } else {
                info1.push(0);
                info2.push(0);
            }
        }
        var ctx = $("#history").get(0).getContext("2d");
        var data = {
            labels: label,
            datasets: [
                {
                    label: "总时间",
                    fillColor: "rgba(216,216,255,0.2)",
                    strokeColor: "#C0C0FF",
                    pointColor: "#A7A7FF",
                    pointStrokeColor: "#FFFFFF",
                    pointHighlightFill: "#FFFFFF",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: info1
                },
                {
                    label: "有效时间",
                    fillColor: "rgba(249,218,255,0.2)",
                    strokeColor: "#F5C0FF",
                    pointColor: "#F0A6FF",
                    pointStrokeColor: "#FFFFFF",
                    pointHighlightFill: "#FFFFFF",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: info2
                }
            ]
        };
        lineChart = new Chart(ctx).Line(data, {
            scaleGridLineColor: "#E2E0E0",
            bezierCurveTension: 0.4,
            multiTooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>分钟"
        });
    }
}
function getDateState() {
    var date = $("#pointday").get(0).value;
    if (date === undefined || date === '' || date === null) return;
    pieChart.destroy();
    showPieChart(date);
}
function getHistoryState(cmd) {
    var begin = $("#beginday").get(0).value;
    var end = $("#endday").get(0).value;
    if (begin === undefined || begin === '' || begin === null || end === undefined || end === '' || end === null) return;
    var date_begin = new Date(begin + ' 00:00:00');
    var date_end = new Date(end + ' 00:00:00');
    lineChart.destroy();
    if ((Math.abs(date_begin - date_end) > defaultDay * 86400000) || (date_begin > date_end)) {
        if (cmd === 0) {
            date_begin.setDate(date_begin.getDate() + defaultDay);
            end = date_begin.Format('yyyy-MM-dd');
            $("#endday").get(0).value = end;
        } else {
            date_end.setDate(date_end.getDate() - defaultDay);
            begin = date_end.Format('yyyy-MM-dd');
            $("#beginday").get(0).value = begin;
        }
    }
    showLineChart(begin, end);
}
function changeUser(name, i) {
    id = name;
    if (i == 1) {
        $("#li1").addClass("on");
        $("#li2").removeClass("on");
    } else {
        $("#li2").addClass("on");
        $("#li1").removeClass("on");
    }
    show();
}
function show() {
    var date = new Date();
    var now = date.Format('yyyy-MM-dd');
    date.setDate(date.getDate() - defaultDay);
    var former = date.Format('yyyy-MM-dd');
    $("#pointday").get(0).setAttribute('value', now);
    $("#beginday").get(0).setAttribute('value', former);
    $("#endday").get(0).setAttribute('value', now);
    showPieChart(now);
    showLineChart(former, now);
}
window.onload = function() {
    show();
};