import Axios from "axios"
import { useState, useEffect } from "react"

import Plot from 'react-plotly.js';


const YahooData = () => {
    let timeInterval = "60"
    let StockSymbol = "NVDA";
    let API_KEY = "KHM0G6B8QHEQ0A02"

    const [getValueX, setGetValueX] = useState([])
    const [getValueY, setGetValueY] = useState([])

    useEffect(() => {
        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${StockSymbol}&apikey=${API_KEY}`).then((response) => {
            let FinalYValues = [];
            for (var key in response.data[`Monthly Time Series`]) {
                FinalYValues.push(parseFloat(response.data[`Monthly Time Series`][key]['1. open']))
                console.log(response)
            }
            setGetValueY(FinalYValues)
        })

    }, [])

    useEffect(() => {

        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${StockSymbol}&apikey=${API_KEY}`).then((response) => {
            let FinalXValues = [];
            for (var key in response.data[`Monthly Time Series`]) {
                FinalXValues.push(key);

            }
            setGetValueX(FinalXValues)
        })

    }, [])


    console.log(getValueY)

    return (
        <div className="graph">
            <Plot
                data={[
                    {
                        x: getValueX,
                        y: getValueY,
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: 'rgb(75, 192, 192)' },
                        line:{color:'rgb(52, 168, 83)',}

                    }
                ]}
                layout={{ 
                    autorange: true,
                    width: 720, 
                    height: 440 , 
                    title:`${StockSymbol}`}}
                config={{displayModeBar: false}}/>
        </div>
    )
};

export default YahooData;