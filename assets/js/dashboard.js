document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const dateElement = document.getElementById('date');
    const currentDate = new Date().toLocaleDateString();
    dateElement.textContent = `Fecha: ${currentDate}`;

    // Simulated data for river levels with timestamps (in real application, fetch data from an API)
    const riverData = {
        chamelecon: {
            point1: [{ time: '08:00', level: 0.57 }, { time: '10:00', level: 1.5 }, { time: '12:00', level: 1.75 }, { time: '15:00', level: 2.75 }, { time: '18:00', level: 3.10 }, { time: '21:00', level: 4.16 }, { time: '23:00', level: 2.80 }],
            point2: [{ time: '08:00', level: 24 }, { time: '10:00', level: 25.50 }, { time: '12:00', level: 26 }, { time: '15:00', level: 26.80 }, { time: '18:00', level: 27 }, { time: '21:00', level: 27.80 }, { time: '23:00', level: 30 }],
            point3: [{ time: '08:00', level: 2 }, { time: '12:00', level: 3 }, { time: '15:00', level: 5 }]
        },
        ulua: {
            point1: [{ time: '08:00', level: 4.2 }, { time: '09:00', level: 4.3 }, { time: '10:00', level: 4.4 }],
            point2: [{ time: '08:00', level: 3.9 }, { time: '09:00', level: 4.0 }, { time: '10:00', level: 4.1 }],
            point3: [{ time: '08:00', level: 6.3 }, { time: '09:00', level: 6.4 }, { time: '10:00', level: 6.5 }]
        }
    };

    // Define alert levels for each point
    const alertLevels = {
        chamelecon: {
            point1: { green: 1.75, yellow: 2.75, red: 3 },
            point2: { green: 25, yellow: 26, red: 28 },
            point3: { green: 2.5, yellow: 3, red: 4.5 }
        },
        ulua: {
            point1: { green: 4, yellow: 5, red: 6 },
            point2: { green: 3.8, yellow: 4.8, red: 5.8 },
            point3: { green: 6.1, yellow: 7.1, red: 8.1 }
        }
    };

    function setAlert(level, levels) {
        if (level >= levels.red) {
            return 'red';
        } else if (level >= levels.yellow) {
            return 'yellow';
        } else {
            return 'green';
        }
    }

    function createChart(ctx, label, data, levels, alertBoxId, alertTextId) {
        // Find the latest reading
        const latestReading = data[data.length - 1];
        const latestAlert = setAlert(latestReading.level, levels);

        // Update the color box and text for the alert
        const alertBox = document.getElementById(alertBoxId);
        const alertText = document.getElementById(alertTextId);
        if (alertBox) {
            alertBox.style.backgroundColor = latestAlert;
            alertText.textContent = `Alert ${latestAlert.charAt(0).toUpperCase() + latestAlert.slice(1)}`;
        }

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(entry => entry.time),
                datasets: [{
                    label: label,
                    data: data.map(entry => entry.level),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: data.map(entry => setAlert(entry.level, levels)),
                    pointBorderColor: 'rgba(0, 0, 0, 0.1)',
                    pointBorderWidth: 1,
                    fill: false,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Hora: ${context.label}, Nivel: ${context.raw} m`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Create charts for Chamelecon
    createChart(
        document.getElementById('chamelecon-chart1').getContext('2d'),
        'Estación: El Tablón',
        riverData.chamelecon.point1,
        alertLevels.chamelecon.point1,
        'chamelecon-chart1-alert',
        'chamelecon-chart1-text'
    );
    createChart(
        document.getElementById('chamelecon-chart2').getContext('2d'),
        'Punto Med.: Pte. Juan A. Melgar Castro',
        riverData.chamelecon.point2,
        alertLevels.chamelecon.point2,
        'chamelecon-chart2-alert',
        'chamelecon-chart2-text'
    );
    createChart(
        document.getElementById('chamelecon-chart3').getContext('2d'),
        'Punto Med.: Canal Maya',
        riverData.chamelecon.point3,
        alertLevels.chamelecon.point3,
        'chamelecon-chart3-alert',
        'chamelecon-chart3-text'
    );

    // Create charts for Ulua
    createChart(
        document.getElementById('ulua-chart1').getContext('2d'),
        'Estación: Chinda',
        riverData.ulua.point1,
        alertLevels.ulua.point1,
        'ulua-chart1-alert',
        'ulua-chart1-text'
    );
    createChart(
        document.getElementById('ulua-chart2').getContext('2d'),
        'Estación: Santiago',
        riverData.ulua.point2,
        alertLevels.ulua.point2,
        'ulua-chart2-alert',
        'ulua-chart2-text'
    );
    createChart(
        document.getElementById('ulua-chart3').getContext('2d'),
        'Punto Med.: Pte. La Democracia',
        riverData.ulua.point3,
        alertLevels.ulua.point3,
        'ulua-chart3-alert',
        'ulua-chart3-text'
    );
});
