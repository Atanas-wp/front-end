const ctx = document.getElementById('myChart');
const ctxPie = document.getElementById('newChart');

/* new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
*/

function randomOneToTen() {
    return Math.ceil(Math.random() * 10);
}

function generate() {
    var arrData = [];
    let loops = randomOneToTen();
    for (var i = 0; i < loops; i++) {
        arrData[i] = randomOneToTen();
    }

    var barNames = [];
    for (var i = 0; i < loops; i++) {
        barNames[i] = "bar" + (i + 1);
    }

    var ranColors = [];
    for (var i = 0; i < loops; i++) {
        ranColors[i] = getRandomColor();
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: barNames,
            datasets: [{
                label: '# of Votes',
                data: arrData,
                borderWidth: 1,
                backgroundColor: ranColors
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
generate()

function generate2() {
    var arrData = [];
    let loops = randomOneToTen();
    for (var i = 0; i < loops; i++) {
        arrData[i] = randomOneToTen();
    }

    var barNames = [];
    for (var i = 0; i < loops; i++) {
        barNames[i] = "bar" + (i + 1);
    }

    var ranColors = [];
    for (var i = 0; i < loops; i++) {
        ranColors[i] = getRandomColor();
    }

    new Chart(ctxPie, {
        type: 'doughnut',
        data: {
            labels: barNames,
            datasets: [{
                label: '# of Votes',
                data: arrData,
                borderWidth: 1,
                backgroundColor: ranColors
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
generate2()

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/*new Chart(ctxPie, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

 */