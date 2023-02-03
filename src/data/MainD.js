import Axios from "axios"
import { useState, useEffect } from "react"
import './MainD.css'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Plot from 'react-plotly.js';

export const getStaticProps = async () => {

}
const MainD = () => {
    let timeInterval = "60"
    let StockSymbol = "AAPL";
    let API_KEY = "KHM0G6B8QHEQ0A02"

    const [getValueX, setGetValueX] = useState([])
    const [getValueY, setGetValueY] = useState([])

    useEffect(() => {
        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=${timeInterval}min&outputsize=full&apikey=${API_KEY}`).then((response) => {
            let FinalYValues = [];
            for (var key in response.data[`Time Series (${timeInterval}min)`]) {
                FinalYValues.push(parseFloat(response.data[`Time Series (${timeInterval}min)`][key]['1. open']))
                // console.log(response)
            }
            setGetValueY(FinalYValues)
        })

    }, [])

    useEffect(() => {

        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=${timeInterval}min&outputsize=full&apikey=${API_KEY}`).then((response) => {
            let FinalXValues = [];
            for (var key in response.data[`Time Series (${timeInterval}min)`]) {
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

                    }
                ]}
                layout={{
                    autorange: true,
                    width: 720,
                    height: 440,
                    rangeselector: {
                        buttons: [
                            {
                                count: 1,
                                label: '1m',
                                step: 'month',
                                stepmode: 'backward'
                            },
                            {
                                count: 6,
                                label: '6m',
                                step: 'month',
                                stepmode: 'backward'
                            },
                            { step: 'all' }
                        ]
                    },
                    rangeslider: { range: ['2015-02-17', '2017-02-16'] },
                    title: `${StockSymbol}`
                }}
                config={{ displayModeBar: false }} />
        </div>
    )
};

export default MainD;