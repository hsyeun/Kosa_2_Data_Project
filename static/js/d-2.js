new Chart(document.getElementById("d-2"), {
  type: 'doughnut',
  data: {
    labels: ["Wavve", "Netflix", "Disney+", "Tving", "Watcha"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#D92B2B", "#8DA632","#F2E3D5","#08A689","#4D818C"],
        data: [8, 4, 4, 2, 1]
      }
    ]
  }
});