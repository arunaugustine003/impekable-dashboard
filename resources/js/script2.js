google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Countries', 'Sales'],
    ['France',     4290],
    ['Italy',      4260],
    ['Germany',  3260],
    ['UK',    7750]
  ]);

  var options = {
    title: '',
    legend: {position: 'bottom'},
    pieHole: 0.49,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}