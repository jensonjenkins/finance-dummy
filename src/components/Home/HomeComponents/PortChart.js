import Axios from "axios"
import { useState, useEffect } from "react"
import './PortChart.css'
import 'chartjs-adapter-date-fns';
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from 'chart.js/auto';
import React from "react";
import LRU from 'lru-cache';


Chart.register(CategoryScale);

const PortChart = (props) => {
    const cache = new LRU({
        max: 800,
        ttl: 1000 * 60 * 60
    });

    let timeInterval = "30"
    let StockSymbol = props.CompanyType;
    let API_KEY = "KHM0G6B8QHEQ0A02"

    const [data, setUserData] = useState({
        labels: [],
        datasets: [{
            data: []
        }]
    })

    const cachedData = cache.get(StockSymbol);

    const fetchData = () => {

        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=${timeInterval}min&outputsize=full&apikey=${API_KEY}`).then((response) => {
            let FinalYValues = [];
            let FinalXValues = [];
            for (var key in response.data[`Time Series (${timeInterval}min)`]) {
                FinalYValues.push(parseFloat(response.data[`Time Series (${timeInterval}min)`][key]['1. open']))
                FinalXValues.push(key);
            }
            setUserData({
                labels: FinalXValues.reverse().slice(-50),
                datasets: [{
                    data: FinalYValues.reverse().slice(-50),
                    label: `${StockSymbol}`,
                    tension: 0.5,
                    pointRadius: 0,
                    borderColor: "rgba(36, 105, 240, 1)",
                    borderWidth: 1.3,
                    fill: {
                        target: 'origin',
                        above: 'rgba(36, 105, 240, 0.13)',
                    },
                    hoverRadius: 6,
                }],
            });
            cache.set(StockSymbol, data);
        });


    }
    useEffect(() => {
        if (!cachedData) {
            fetchData();
        } else {
            setUserData(cachedData);
        }
    }, [cachedData])



    const optionsD = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                intersect: false,
                yAlign: 'bottom',
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                },
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                display: false
            },

        },

    }

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <div className="PortChartcontainer">
                <Line data={data} options={optionsD} />
            </div>
        </React.Suspense>


    )
};
export default PortChart;