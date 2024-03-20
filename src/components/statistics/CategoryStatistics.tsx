import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function CategoryStatistics() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz'],
            datasets: [
                {
                    label: 'Teknoloji',
                    backgroundColor: '#507182',
                    borderColor: documentStyle.getPropertyValue('--gray-600'),
                    data: [80, 73, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Bilim',
                    backgroundColor: '#668fae',
                    borderColor: documentStyle.getPropertyValue('--gray-500'),
                    data: [60, 48, 53, 62, 70, 55, 80]
                },
                {
                    label: 'Sağlıklı Yaşam',
                    backgroundColor: '#7c9380',
                    borderColor: documentStyle.getPropertyValue('--pink-200'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                },
                {
                    label: 'Seyahat',
                    backgroundColor: '#a2b999',
                    borderColor: documentStyle.getPropertyValue('--green-300'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.7,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 800
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}