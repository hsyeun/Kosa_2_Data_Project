am4core.useTheme(am4themes_animated);

var chart = am4core.create("w-4", am4charts.PieChart);

chart.data = [{
  "continent": "유럽",
  "count": 10
}, {
  "continent": "남미",
  "count": 4
}, {
  "continent": "북중미-카리브",
  "count": 1
}, {
  "continent": "아시아",
  "count": 1
}];

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "count";
series.dataFields.category = "continent";

// this creates initial animation
series.hiddenState.properties.opacity = 1;
series.hiddenState.properties.endAngle = -90;
series.hiddenState.properties.startAngle = -90;

chart.legend = new am4charts.Legend();

series.colors.list = [
  // am4core.color("#845EC2"),
  am4core.color("#D65DB1"),
  // am4core.color("#FF6F91"),
  am4core.color("#FF9671"),
  am4core.color("#FFC75F"),
  am4core.color("#F9F871")
];

//파이 부분별 구분선 색
series.slices.template.stroke = am4core.color("#fff");
// 글자크기
series.labels.template.fontSize = 20;
chart.legend.labels.template.fontSize = 20;

chart.legend.valueLabels.template.disabled = true;