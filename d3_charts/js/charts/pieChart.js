const pieChart = (options) => {
  var list = document.getElementsByClassName("pie-chart")

  for (var item of list) {

    selector = document.querySelector(`#${item.id}`)

    options.title.text = selector.dataset.title
    options.title.display = JSON.parse(selector.dataset.titleshow)
    options.legend.display = JSON.parse(selector.dataset.legendshow)
    options.scales.xAxes.display = JSON.parse(selector.dataset.xaxisshow)
    options.scales.xAxes[0].display = JSON.parse(selector.dataset.gridshow)
    options.scales.yAxes.display = JSON.parse(selector.dataset.yaxisshow)
    options.scales.yAxes[0].display = JSON.parse(selector.dataset.gridshow)

    new Chart(document.getElementById(item.id), {
      type: 'pie',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }]
      },
      options: options
    });
  }

}

module.exports = {
  pieChart: function(options){
    return pieChart(options)
  }
}
