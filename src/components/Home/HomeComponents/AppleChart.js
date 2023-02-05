import Axios from "axios"
import { useState, useEffect } from "react"
import './AppleChart.css'
import 'chartjs-adapter-date-fns';
import { Line } from "react-chartjs-2";
import {CategoryScale, Chart} from 'chart.js/auto'; 


Chart.register(CategoryScale);



const AppleChart = () => {
    let timeInterval = "30"
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
            console.log(FinalXValues)
            setUserData({

                labels: FinalXValues.reverse().slice(-50),
                datasets: [{
                    data: FinalYValues.reverse().slice(-50),
                    label: `${StockSymbol}`,
                    tension: 0.5,
                    pointRadius: 0,
                    borderColor: "rgba(36, 105, 240, 1)",
                    borderWidth: 3.3,
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
            legend:{
                display:false
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
            y:{
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                display:false
            },
            
        },
        
    }
    
    return (
        // <ErrorBoundary>
            <div className="AppleChartcontainer">
                <Line data={data} options={optionsD} />
            </div>
/* 
          </ErrorBoundary>   */

    )
};

export default AppleChart;