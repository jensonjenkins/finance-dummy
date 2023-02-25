import './HeaderContent.css'
import Axios from 'axios'
import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'

const HeaderContent = (props) => {
    const [percDiff, setPercDiff] = useState('')
    const [actDiff, setActDiff] = useState('')
    const [openVal, setOpenVal] = useState('')
    const [symbol, setSymbol] = useState('')
    const [CurCondition, setCurCondition] = useState('')
    const API_KEY = "NEJLFBFPMR2JNCEB"
    const COMPANY_NAME = `${props.CompanySymbol}`;
    const cacheKey = `company_${COMPANY_NAME}_data`;

    useEffect(() => {
        const fetchData = () => {
            Axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${COMPANY_NAME}&apikey=${API_KEY}`)
                .then((response) => {
                    setSymbol(response.data['Global Quote']['01. symbol'])
                    setOpenVal(response.data['Global Quote']['02. open'])
                    setActDiff(response.data['Global Quote']['09. change'])
                    setPercDiff(response.data['Global Quote']['10. change percent'])

                    // Store data in local storage
                    localStorage.setItem(cacheKey, JSON.stringify({
                        symbol: response.data['Global Quote']['01. symbol'],
                        openVal: response.data['Global Quote']['02. open'],
                        actDiff: response.data['Global Quote']['09. change'],
                        percDiff: response.data['Global Quote']['10. change percent']
                    }));
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        // Fetch the data initially
        const cachedData = JSON.parse(localStorage.getItem(cacheKey));
        if (cachedData) {
            setSymbol(cachedData.symbol);
            setOpenVal(cachedData.openVal);
            setActDiff(cachedData.actDiff);
            setPercDiff(cachedData.percDiff);
        } else {
            fetchData();
        }

        // Set up the interval to fetch the data every 30 seconds
        const intervalId = setInterval(() => {
            setOpenVal('');
            setActDiff('');
            setPercDiff('');
            setSymbol('');
            fetchData();
        }, 300000);

        // Clean up the interval on unmount
        return () => clearInterval(intervalId);
    }, [COMPANY_NAME, API_KEY, cacheKey]);

    useEffect(() => {
        if (percDiff[0] === '-') {
            setCurCondition("Down");
        } else {
            setCurCondition("Up");
        }
    }, [percDiff]);

    return (
        <>
            <a className='TinyContainer'>
                <div className='arrowIcon'>
                    <BsFillArrowUpSquareFill className={`BsFillArrowUpSquareFill${CurCondition}`} size={35} />
                    <BsFillArrowDownSquareFill className={`BsFillArrowDownSquareFill${CurCondition}`} size={35} />
                </div>
                <div className='tinyStats'>
                    <div className='tinyLeft'>
                        <p className='tinyTitle'>{symbol}</p>
                        <p className='tinyPrice'>{openVal}</p>

                    </div>
                    <div className='tinyRight'>
                        <div className='tinyPerc'>
                            <p className={`tinyChange${CurCondition}`}>{percDiff}</p>
                            <p className={`tinyChange${CurCondition}`}>{actDiff}</p>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}
export default HeaderContent
