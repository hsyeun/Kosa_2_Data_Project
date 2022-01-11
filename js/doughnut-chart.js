new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Netflix", "Tving", "Wavve", "Watcha", "Disney+"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#D92B2B", "#8DA632","#F2E3D5","#08A689","#4D818C"],
        data: [5267,2478,734,784,433]
      }
    ]
  }
});