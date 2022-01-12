new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Netflix", "TVN", "Tving", "Wavve", "MBC", "OCN", "SBS"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#D92B2B", "#8DA632","#F2E3D5","#08A689","#4D818C","#D92B2B", "#8DA632"],
        data: [4, 2, 5, 1, 1,1,1]
      }
    ]
  }
});