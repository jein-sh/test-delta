const deleteCharts = () => {
    const chartContainers = document.querySelectorAll('[data-chart]');

    chartContainers.forEach((el) => {
        el.remove();
    });
};

const initChart = (el) => {
    const trChart = document.createElement("tr");
    trChart.setAttribute('data-chart', '');
    const tdChart = document.createElement('td');
    tdChart.setAttribute('colspan', '5');
    tdChart.setAttribute('style', 'padding: 0; background-color: #ffffff;');
    trChart.appendChild(tdChart);
    const figure = document.createElement('figure');
    figure.classList.add('highcharts-figure');
    tdChart.appendChild(figure);
    const container = document.createElement('div');
    container.classList.add('highcharts-container');
    figure.appendChild(container);


    const trValue = el.closest('[data-value]');
    const parent = trValue.parentNode;
    parent.insertBefore(trChart, trValue.nextSibling);

    Highcharts.chart(container, {
        series: [{
            data: [128654, 395045, 500521, 480521, 545865, 428022, 455822, 528425]
        }],
    });
};

window.addEventListener('load', () => {
    document.addEventListener('click', (evt) => {
      if(evt.target.closest('[data-value]')) {
        deleteCharts();
        initChart(evt.target.closest('[data-value]'));
      }
    });
});
