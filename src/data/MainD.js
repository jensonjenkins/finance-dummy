import Axios from "axios"
import { useState, useEffect } from "react"
import './MainD.css'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Plot from 'react-plotly.js';

export const getStaticProps = async()=> {

}
const MainD = () => {
    let StockSymbol = "AMZN";
    let API_KEY = "KHM0G6B8QHEQ0A02"

    const [getValueX, setGetValueX] = useState([])
    const [getValueY, setGetValueY] = useState([])
    const [dummy, setDummy] = useState('')

    useEffect(()=>{
        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&outputsize=full&apikey=${API_KEY}`).then((response) => {
            let DummyVal = [];
            for (var key in response.data['Time Series (5min)']) {
                DummyVal.push(parseFloat(response.data['Time Series (5min)'][key]['1. open']))
                
            }
            setDummy(DummyVal) 
        })
    }, [dummy])

    useEffect(()=>{
        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&outputsize=full&apikey=${API_KEY}`).then((response) => {
            let FinalYValues = [];
            for (var key in response.data['Time Series (5min)']) {
                FinalYValues.push(parseFloat(response.data['Time Series (5min)'][key]['1. open']))
                
            }
            setGetValueY(FinalYValues) 
        })

    }, [])
        
    useEffect(()=>{

        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&outputsize=full&apikey=${API_KEY}`).then((response) => {
            let FinalXValues = [];
            for (var key in response.data['Time Series (5min)']) {
                FinalXValues.push(key);

            }
            setGetValueX(FinalXValues)
        })

    }, [])

    console.log(getValueX)
    console.log(getValueY)

    return (
        <>
            <Plot
                data={[
                    {
                        x: getValueX,
                        y: getValueY,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'rgb(75, 192, 192)' },

                    }
                ]}
                layout={{ width: 720, height: 440 }} />
        </>
    )
};

export default MainD;