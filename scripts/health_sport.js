var barChart;
var lineChart;
var defaultDay = 20;
function showBarChart(date) {
    $.ajax({
        type: 'POST',
        url: '../../include/getSport.php',
        data: {'begin': date,
        'end': date},
        success: paintBar
    });
    function paintBar(array) {
        var info;
        var jToA = eval(array);
        if (array == 0) {
            info = [0, 0];
        } else {
            info = new Array(jToA[0].runtime, jToA[0].cycletime);
        }
        var ctx = $("#singleday").get(0).getContext("2d");
        var data = {
            labels: ["跑步时间", "骑行时间"],
            datasets: [
                {
                    label: "运动状况",
                    fillColor: "rgba(216,216,255,0.5)",
                    strokeColor: "#C0C0FF",
                    highlightFill: "rgba(191,191,255,0.8)",
                    highlightStroke: "#A7A7FF",
                    data: info
                }
            ]
        };
        barChart = new Chart(ctx).Bar(data, {
            scaleGridLineColor: "#E2E0E0",
            barValueSpacing: 100,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>分钟"
        });
    }
}
function showLineChart(begin, end) {
    $.ajax({
        type: 'POST',
        url: '../../include/getSport.php',
        data: {'begin': begin,
        'end': end},
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
                info1.push(jToA[j].runtime);
                info2.push(jToA[j].cycletime);
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
                    label: "跑步时间",
                    fillColor: "rgba(216,216,255,0.2)",
                    strokeColor: "#C0C0FF",
                    pointColor: "#A7A7FF",
                    pointStrokeColor: "#FFFFFF",
                    pointHighlightFill: "#FFFFFF",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: info1
                },
                {
                    label: "骑行时间",
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
    barChart.destroy();
    showBarChart(date);
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
$(function() {
    var date = new Date();
    var now = date.Format('yyyy-MM-dd');
    date.setDate(date.getDate() - defaultDay);
    var former = date.Format('yyyy-MM-dd');
    $("#pointday").get(0).setAttribute('value', now);
    $("#beginday").get(0).setAttribute('value', former);
    $("#endday").get(0).setAttribute('value', now);
    showBarChart(now);
    showLineChart(former, now);
});