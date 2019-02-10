var ctx1 = document.getElementById('ctx1').getContext('2d');
var ctx2 = document.getElementById('ctx2').getContext('2d');
var ctx3 = document.getElementById('ctx3').getContext('2d');
var ctxBar = document.getElementById('ctxBar').getContext('2d');

var donutOptions = {
  cutoutPercentage: 85,
  rotation: (1/2) * Math.PI,
  title: {
    display: false,
  },
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  }
};

var applicants = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    datasets: [
      {
      data: [3154, 846],
      backgroundColor: ['#47BAC1', '#D9E4EB'],
      borderWidth: 0,
      }
    ],
  },
  options: donutOptions
});

var interviews = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [1546, 2454],
          backgroundColor: ['#15A4FA', '#D9E4EB'],
          borderWidth: 0
        }
      ]
    },
    options: donutOptions
});

var forwards = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [912, 3088],
          backgroundColor: ['#AE69AF', '#D9E4EB'],
          borderWidth: 0
        }
      ]
    },
    options: donutOptions
});

var barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels:['U','M','T','W','R','F','S','U','M','T','W','R','F','S'],
      datasets: [
        {
          label: 'Applicants/Day',
          data: [40, 230, 270, 360, 200, 240, 120, 40, 310, 370, 220, 210, 180, 100],
          backgroundColor: '#47BAC1',
          borderWidth: 0,
        }
      ]
    },
    options: {
      title: {
        display: false
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
            gridLines: {
              display: false,
            }
        }],
        yAxes: [{
            gridLines: {
              display: false,
            }
        }]
    }
    }
});
