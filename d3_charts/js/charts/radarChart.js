const radarChart = (idRadarChart, options) => {
  const selector = document.querySelector(`#${idRadarChart}`)

  options.title.text = selector.dataset.title
  options.title.display = JSON.parse(selector.dataset.titleshow)
  options.legend.display = JSON.parse(selector.dataset.legendshow)
  options.scales.xAxes.display = JSON.parse(selector.dataset.xaxisshow)
  options.scales.xAxes[0].display = JSON.parse(selector.dataset.gridshow)
  options.scales.yAxes.display = JSON.parse(selector.dataset.yaxisshow)
  options.scales.yAxes[0].display = JSON.parse(selector.dataset.gridshow)

  return new Chart(document.getElementById(idRadarChart), {
      type: 'radar',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "1950",
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179,181,198,1)",
            data: [8.77,55.61,21.69,6.62,6.82]
          }, {
            label: "2050",
            fill: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            data: [25.48,54.16,7.61,8.06,4.45]
          }
        ]
      },
      options: options
    })
}

module.exports = {
  radarChart: function(idRadarChart, options){
    return radarChart(idRadarChart, options)
  }
}
