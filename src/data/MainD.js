import Axios from "axios"
import { useState } from "react"
import './MainD.css'


const MainD = () => {
    const curAr = [];
    const getVal = () => {
        Axios.get('https://api.twelvedata.com/time_series?apikey=2ff55c0bf8614eb5a7bc3f68cee19b31&interval=1min&format=JSON&symbol=AAPL').then((response) => {

            for (let i = 0; i <= 29; i++) {
                curAr.push(response.data.values[i].open);
            }
        })
        console.log(curAr);
    }
    return (
        <>
            <button onClick={getVal}>getVal</button>
        </>
    )
};

export default MainD;