const barChart = (idBarChart, options) => {
  const selector = document.querySelector(`#${idBarChart}`)

  options.title.text = selector.dataset.title
  options.title.display = JSON.parse(selector.dataset.titleshow)
  options.legend.display = JSON.parse(selector.dataset.legendshow)
  options.scales.xAxes.display = JSON.parse(selector.dataset.xaxisshow)
  options.scales.xAxes[0].display = JSON.parse(selector.dataset.gridshow)
  options.scales.yAxes.display = JSON.parse(selector.dataset.yaxisshow)
  options.scales.yAxes[0].display = JSON.parse(selector.dataset.gridshow)

  return new Chart(document.getElementById(idBarChart), {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: options
    })
}

module.exports = {
  barChart: function(idBarChart, options){
    return barChart(idBarChart, options)
  }
}
