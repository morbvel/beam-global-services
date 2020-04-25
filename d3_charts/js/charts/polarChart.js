const polarChart = (idPolarChart, options) => {
  const selector = document.querySelector(`#${idPolarChart}`)

  options.title.text = selector.dataset.title
  options.title.display = JSON.parse(selector.dataset.titleshow)
  options.legend.display = JSON.parse(selector.dataset.legendshow)
  options.scales.xAxes.display = JSON.parse(selector.dataset.xaxisshow)
  options.scales.xAxes[0].display = JSON.parse(selector.dataset.gridshow)
  options.scales.yAxes.display = JSON.parse(selector.dataset.yaxisshow)
  options.scales.yAxes[0].display = JSON.parse(selector.dataset.gridshow)

  return new Chart(document.getElementById(idPolarChart), {
    type: 'polarArea',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: options
  });
}

module.exports = {
  polarChart: function(idPolarChart, options){
    return polarChart(idPolarChart, options)
  }
}
