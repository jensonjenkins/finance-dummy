import './Home.css';
import { SiIbm } from 'react-icons/si'
import { ImAppleinc } from 'react-icons/im'
import ChartjsDemo from '../../data/ChartjsDemo';
import AppleChart from './HomeComponents/AppleChart';
import PortChart from './HomeComponents/PortChart';
import { MdAddChart } from 'react-icons/md'
import Axios from "axios"
import { useState, useEffect } from 'react';


const Home = () => {
    let API_KEY = "KHM0G6B8QHEQ0A02";
    let timeInterval = "30"

    const getListing = async (StockSymb) => {
        return Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymb}&interval=60min&outputsize=full&apikey=${API_KEY}`)
          .then((response) => {
            if (response.data["Time Series (60min)"]) {
              for (var key in response.data["Time Series (60min)"]) {
                return response.data["Time Series (60min)"][key]["1. open"];
              }
            }
            return null;
          });
      };
    const PriceFetch = (props) => {
        const [price, setPrice] = useState("Loading...");
      
        useEffect(() => {
            const fetchData = async () => {
                const newPrice = await getListing(props.symbol);
                if (newPrice) {
                    setPrice(newPrice);
                  }
            };
            fetchData();
        }, []);


        return (<div>{parseFloat(price).toFixed(2)}&nbsp;USD</div>)
    }


    return (
        <>
            <div className='OutContainer'>
                <div className='LeftCont'>

                </div>

                <div className='RightCont'>
                    <div className='LeftInterior'>
                        <div className='IBM'>
                            <div className='IBMleft'>
                                <SiIbm size={70} className="IBM-logo"></SiIbm>
                                <p className='IBMname'>IBM - NYSE</p>
                            </div>
                            <div className='IBMright'>
                                <p className='IBMprice'>
                                    <div className='Row'>
                                    <PriceFetch symbol = "IBM"/>
                                    </div>
                                    
                                    </p>
                                <p className='IBMstats'>+85.32 +0.81% </p>
                            </div>
                        </div>

                        <div className='Portfolio'>
                            <p className='PortTitle'>PORTFOLIO</p>
                            <a className='AddPort'>
                                <MdAddChart className='AddLogo' size={70} color='rgb(36, 105, 240)' />
                                <p className='PortText'>Create a portfolio to view your investments in one place</p>
                            </a>

                            <div className='PortContent'>
                                <div className='DivLinePort' />


                                <p className='AppleStatTitle'>IBM</p>

                                <p className='AppleStatValue'> <PriceFetch symbol = "IBM"/></p>

                                <PortChart CompanyType="IBM" />
                            </div>

                            <div className='PortContent'>
                                <div className='DivLinePort' />
                                <p className='AppleStatTitle'>NVDA</p>
                                <p className='AppleStatValue'><PriceFetch symbol = "NVDA"/></p>
                                <PortChart CompanyType="NVDA" />
                            </div>

                            <div className='PortContent'>
                                <div className='DivLinePort' />
                                <p className='AppleStatTitle'>GOOGL</p>
                                <p className='AppleStatValue'><PriceFetch symbol = "GOOGL"/></p>
                                <PortChart CompanyType="GOOGL" />
                            </div>
                        </div>
                    </div>

                    <div className='RightInterior'>
                        <div className='AppleStock'>

                            <div className='AppleTop'>
                                <ImAppleinc size={50}></ImAppleinc>
                                <div className='AppleNameTag'>
                                    <p className='AppleName'>Apple Inc.</p>
                                    <p className='AppleSrc'>AAPL - NASDAQ</p>
                                    <p className='ApplePrice'><PriceFetch symbol = "AAPL"/></p>


                                    <div className='DivLineApple'></div>
                                </div>
                                <p className='AppleStats'>+1.35 +0.15%</p>
                            </div>

                            <div className='AppleMid'>
                                <div className='AppleMidLeft'>
                                    <p className='AppleStatTitle'>Open</p>
                                    <p className='AppleStatValue'>112.68</p>
                                    <p className='AppleStatTitle'>Volume</p>
                                    <p className='AppleStatValue'>123,152,886</p>
                                </div>
                                <div className='AppleMidRight'>
                                    <p className='AppleStatTitle'>52 Week Range</p>
                                    <p className='AppleStatValue'>62,4 - 125,23</p>
                                    <p className='AppleStatTitle'>Market Cap</p>
                                    <p className='AppleStatValue'>1.883T</p>
                                </div>

                            </div>

                            <div className='AppleGraph'>
                                <AppleChart />
                            </div>

                        </div>

                        <div className='Microsoft'>
                            MSFT - NASDAQ
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home