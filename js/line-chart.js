new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2010,2015],
    datasets: [{ 
        data: [8,6,3,9,10],
        label: "Naver",
        borderColor: "#D92B2B",
        fill: false
      }, { 
        data: [4],
        label: "Youtube",
        borderColor: "#F2E3D5",
        fill: false
      }, { 
        data: [7,3,6],
        label: "Instagram",
        borderColor: "#8DA632",
        fill: false
      }, { 
        data: [4,7,8,10,34],
        label: "Facebook",
        borderColor: "#4D818C",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Social Networks (line chart)'
    }
  }
});