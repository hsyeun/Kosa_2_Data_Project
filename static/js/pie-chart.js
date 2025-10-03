new Chart(document.getElementById("pie-chart"), {
  type: 'pie',
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#D92B2B", "#8DA632","#F2E3D5","#08A689","#4D818C"],
      data: [2478,5267,734,784,433]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Last OLYMPIC`s Trend'
    }
  }
});