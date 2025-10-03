new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: ["다이어트", "운동", "건강", "걷기","기부","공부","책","행복","사랑","취미","대선","친구"],
    datasets: [{ 
        data: [65,145,121,0,0,138,106,76,0,46,0,77],
        label: "Naver",
        borderColor: "#6BE8C5",
        fill: false
      }, { 
        data: [14,43,120,0,0,41,43,105,55,0,0,0],
        label: "Youtube",
        borderColor: "#E8559E",
        fill: false
      }, { 
        data: [223,181,178,141,126,77,71,59,43,35,0,0],
        label: "Instagram",
        borderColor: "#84D8FF",
        fill: false
      }, { 
        data: [8,5,0,0,0,3,2,4,3,4,4,3],
        label: "Facebook",
        borderColor: "#FFE05B",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Social Networks (line chart)'
    },
    scales: {
      yAxes: [{
          ticks: {
              fontSize: 18
          }
      }],
      xAxes: [{
        ticks: {
            fontSize: 20
        }
    }]
  }
  }
});