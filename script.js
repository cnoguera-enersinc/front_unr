fetch('data.json')
    .then(response => response.json())
    .then(data => {
        Highcharts.chart('container', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Ejemplo de Gráfico de Linea'
            },
            xAxis: {
                categories: data.categories
            },
            yAxis: {
                title: {
                    text: 'Valor'
                }
            },
            series: data.series
        });
    })
    .catch(error => console.error('Error fetching data:', error));
