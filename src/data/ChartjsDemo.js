import Axios from "axios"
import { useState, useEffect } from "react"
import './ChartjsDemo.css'
import 'chartjs-adapter-date-fns';
import { Line } from "react-chartjs-2";
import ErrorBoundary from "../ErrorHandling/ErrorBoundary";
import {CategoryScale, Chart} from 'chart.js/auto'; 


Chart.register(CategoryScale);



const ChartjsDemo = () => {
    let timeInterval = "15"
    let StockSymbol = "AAPL";
    let API_KEY = "KHM0G6B8QHEQ0A02"
    const [data, setUserData] = useState({
        labels: [],
        datasets: [{
            data: []
        }]
    })


    useEffect(() => {
        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=${timeInterval}min&outputsize=full&apikey=${API_KEY}`).then((response) => {
            let FinalYValues = [];
            let FinalXValues = [];
            for (var key in response.data[`Time Series (${timeInterval}min)`]) {
                FinalYValues.push(parseFloat(response.data[`Time Series (${timeInterval}min)`][key]['1. open']))
                FinalXValues.push(key);

            }
            console.log(FinalYValues)
            setUserData({

                labels: FinalXValues.reverse(),
                datasets: [{
                    data: FinalYValues.reverse(),
                    label: `${StockSymbol}`,
                    tension: 0.6,
                    pointRadius: 0,
                    borderColor: "rgba(36, 105, 240, 1)",
                    borderWidth: 2.3,
                    fill: {
                        target: 'origin',
                        above: 'rgba(36, 105, 240, 0.13)',
                    },
                    hoverRadius: 6,


                }],

            })
        })

    }, [])
    const optionsD = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                intersect: false,
                yAlign: 'bottom',
            },
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month'
                },
                grid: {
                    display: false
                }
            },
            y:{
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            }
        },
    }
    
    return (
        // <ErrorBoundary>
            <div className="container">
                <Line data={data} options={optionsD} />
            </div>
/* 
          </ErrorBoundary>   */

    )
};

export default ChartjsDemo;