


import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto'

const Charts = ({countryKey, category}) => {
    const [histogramData, setHistogramData] = useState([]);

    useEffect(() => {
        salaryData();
    }, []);

   

    const salaryData = async () => {
        const data = await fetch(`https://api.adzuna.com/v1/api/jobs/${countryKey}/histogram?app_id=4a19f856&app_key=5d047d2e363e2e043e36902530dd8793&category=${category}`);
        const jsonData = await data.json();
        const histogram = jsonData.histogram;
        const histogramArray = Object.entries(histogram).map(([title, count]) => ({
            title,
            count
        }));
        setHistogramData(histogramArray);
    };

    useEffect(() => {
        const chartData = {
            labels: histogramData.map((data) => data.title),
            datasets: [{
                label: 'Histogram Data',
                data: histogramData.map((data) => data.count),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        }

        const config = {
            type: 'bar',
            data: chartData,
            options: {
                maintainAspectRatio: false,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Salary Range'
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Number of Jobs'
                    },
                    beginAtZero: true
                  }
                }
            }
        };

        const myChart = new Chart(document.getElementById('myChart'), config);
        return () => myChart.destroy();
    }, [histogramData]);

    return (
        <div>
            <canvas id="myChart" width={400} height={400}></canvas>
        </div>
    )
};

export default Charts;


