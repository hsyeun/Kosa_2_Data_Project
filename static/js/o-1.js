am4core.useTheme(am4themes_animated);

var chart = am4core.create("o-1", am4charts.PieChart);

chart.data = [{
  "country": "노르웨이, 독일, 캐나다",
  "count": 99
}, {
  "country": "미국, 네덜란드, 스웨덴",
  "count": 57
}, {
  "country": "대한민국, 스위스, 프랑스",
  "count": 47
}, {
  "country": "오스트리아, 일본, 이탈리아",
  "count": 37
}, {
  "country": "OAR, 체코, 벨라루스",
  "count": 27
}, {
  "country": "중국, 슬로바키아, 핀란드",
  "count": 18
}, {
  "country": "영국, 폴란드, 헝가리",
  "count": 8
}, {
  "country": "우크라이나, 호주, 슬로베니아",
  "count": 6
}, {
  "country": "벨기에, 스페인, 뉴질랜드",
  "count": 5
}, {
  "country": "카자흐스탄",
  "count": 3
}];

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "count";
series.dataFields.category = "country";

// this creates initial animation
series.hiddenState.properties.opacity = 1;
series.hiddenState.properties.endAngle = -90;
series.hiddenState.properties.startAngle = -90;

// chart.legend = new am4charts.Legend();

series.colors.list = [
  am4core.color("#845EC2"),
  am4core.color("#D65DB1"),
  am4core.color("#FF6F91"),
  am4core.color("#FF9671"),
  am4core.color("#FFC75F"),
  am4core.color("#F9F871")
];

//파이 부분별 구분선 색
series.slices.template.stroke = am4core.color("#fff");
// 글자크기
series.labels.template.fontSize = 20;