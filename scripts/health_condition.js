var barChart;
var lineChart;
var defaultDay = 20;
function showBarChart(cmd, date) {
    $.ajax({
        type: 'POST',
        url: '../../include/getCondition.php',
        data: {'begin': date,
        'end': date},
        success: paintBar
    });
    function paintBar(array) {
        var info;
        var jToA = eval(array);
        if (array == 0) {
            info = 0;
        } else {
            info = jToA[0][cmd];
        }
        var ctx = $("#singleday").get(0).getContext("2d");
        var data = {
            labels: [getChs(cmd)],
            datasets: [
                {
                    label: "身体状况",
                    fillColor: "rgba(216,216,255,0.5)",
                    strokeColor: "#C0C0FF",
                    highlightFill: "rgba(191,191,255,0.8)",
                    highlightStroke: "#A7A7FF",
                    data: [info]
                }
            ]
        };
        var unit = getUnit(cmd);
        $("#unit_first").html('(单位: ' + unit + ')');
        barChart = new Chart(ctx).Bar(data, {
            scaleGridLineColor: "#E2E0E0",
            barValueSpacing: 220,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>" + unit
        });
    }
}
function showLineChart(cmd, begin, end) {
    $.ajax({
        type: 'POST',
        url: '../../include/getCondition.php',
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
        var info = new Array();
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
                info.push(jToA[j][cmd]);
            } else {
                info.push(0);
            }
        }
        var ctx = $("#history").get(0).getContext("2d");
        var data = {
            labels: label,
            datasets: [
                {
                    label: "身体状况",
                    fillColor: "rgba(216,216,255,0.2)",
                    strokeColor: "#C0C0FF",
                    pointColor: "#A7A7FF",
                    pointStrokeColor: "#FFFFFF",
                    pointHighlightFill: "#FFFFFF",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: info
                }
            ]
        };
        var unit = getUnit(cmd);
        $("#unit_second").html('(单位: ' + unit + ')');
        lineChart = new Chart(ctx).Line(data, {
            scaleGridLineColor: "#E2E0E0",
            bezierCurveTension: 0.4,
            multiTooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>" + unit
        });
    }
}
function getChs(cmd) {
    var info;
    if (cmd == 'height') {
        info = '身高';
    } else if (cmd == 'weight') {
        info = '体重';
    } else if (cmd == 'heartrate') {
        info = '心率';
    } else {
        info = '血压';
    }
    return info;
}
function getUnit(cmd) {
    var unit;
    if (cmd == 'height') {
        unit = 'cm';
    } else if (cmd == 'weight') {
        unit = 'kg';
    } else if (cmd == 'heartrate') {
        unit = '次/分';
    } else {
        unit = 'mmhg';
    }
    return unit;
}
function getDateState() {
    var date = $("#pointday").get(0).value;
    if (date === undefined || date === '' || date === null) return;
    barChart.destroy();
    showBarChart($("#select_single").val(), date);
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
    showLineChart($("#select_history").val(), begin, end);
}
$(function() {
    var date = new Date();
    var now = date.Format('yyyy-MM-dd');
    date.setDate(date.getDate() - defaultDay);
    var former = date.Format('yyyy-MM-dd');
    $("#pointday").get(0).setAttribute('value', now);
    $("#beginday").get(0).setAttribute('value', former);
    $("#endday").get(0).setAttribute('value', now);
    showBarChart('height', now);
    showLineChart('height', former, now);
});