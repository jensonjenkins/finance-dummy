import Axios from "axios"
import { useState, useEffect } from "react"

import 'chartjs-adapter-date-fns';
import { Line } from "react-chartjs-2";
import {CategoryScale, Chart} from 'chart.js/auto'; 
Chart.register(CategoryScale);




const TimeSeriesMonthly = () => {
    let timeInterval = "60"
    let StockSymbol = "AAPL";
    let API_KEY = "KHM0G6B8QHEQ0A02"
    const [data, setUserData] = useState({
        labels: [],
        datasets: [{
            data: []
        }]
    })


    useEffect(() => {
        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${StockSymbol}&apikey=${API_KEY}`).then((response) => {
            let FinalYValues = [];
            let FinalXValues = [];
            for (var key in response.data[`Monthly Time Series`]) {
                FinalYValues.push(parseFloat(response.data[`Monthly Time Series`][key]['1. open']))
                FinalXValues.push(key);
                // console.log(response)
            }
            setUserData({

                labels: FinalXValues.reverse(),
                datasets: [{
                    data: FinalYValues.reverse(),
                    label: `${StockSymbol}`,
                    tension: 0.6,
                    pointRadius: 0,
                    borderColor:"rgba(36, 105, 240, 1)",
                    borderWidth:2.3,
                    fill: {
                        target: 'origin',
                        above: 'rgba(36, 105, 240, 0.13)',
                    },
                    hoverRadius:6,
                    
                    
                }],

            })
        })

    }, [])
    const optionsD = {
        responsive:true,
        maintainAspectRatio:false,
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
                    unit: 'year'
                },
                grid:{
                    display:false
                }
            },
            y:{
                grid:{
                    color:'rgba(0, 0, 0, 0.05)'
                }
            }
        },
    }

    return (
        <div className="container">
            <Line data={data} options={optionsD} />
        </div>


    )
};

export default TimeSeriesMonthly;