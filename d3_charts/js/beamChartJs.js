const beamChartJs = () => {
  const Chart = require('chart.js')

  const options = {
    title: {
      display: true,
      text: ''
    },
    legend: {
      display: false
    },
    reponsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          display: true
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true
        },
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  // Explicit chart
  /*
  require('./charts/barChart').barChart('bar-chart', options)
  require('./charts/linealChart').linealChart('lineal-chart', options)
  require('./charts/pieChart').pieChart(options)
  require('./charts/radarChart').radarChart('radar-chart', options)
  */

  // Global method for creating charts with chartJs
  require('./charts/charts').charts(options, "new-bar-chart")

}

module.exports = {
  beamChartJs: function(){
    return beamChartJs()
  }
}
