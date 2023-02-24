import './ViewChart.css'
import TradingViewWidgetMain from '../../../Charting/ViewCharting/TradingViewMain'
import Axios from 'axios'
import { useState, useEffect } from 'react'



const ViewChart = (props) => {
  const API_KEY = "KHM0G6B8QHEQ0A02";
  const [percDiff, setPercDiff] = useState('');
  const [actDiff, setActDiff] = useState('');
  const [openVal, setOpenVal] = useState('');
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  const fetchData = () => {
    Axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${props.CompanyName}&apikey=${API_KEY}`)
      .then((response) => {
        setOpenVal(response.data['Global Quote']['02. open']);
        setActDiff(response.data['Global Quote']['09. change']);
        setPercDiff(response.data['Global Quote']['10. change percent']);
      })
      .catch((error) => {
        console.log(error);
      });

    Axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${props.CompanyName}&apikey=${API_KEY}`)
      .then((response) => {
        setName(response.data.Name);
        setAbout(response.data.Description);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Initial data fetch
    fetchData();

    // Fetch data every 5 minutes
    const interval = setInterval(() => {
      fetchData();
    }, 5 * 60 * 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [props.CompanyName]);

  return (
    <>
      <div className='MainViewContainer'>
        <div className='MainViewLeft'>
          <div className='MainViewTitle'>
            <p className='MainCompName'>{name}</p>
          </div>
          <div className='MainViewStats'>
            <div className='ViewValue'>
              <p className='ValueText'>{openVal}</p>
            </div>
            <div className='PercChangeCont'>
              <p className='PercChangeText'>{percDiff}</p>
            </div>
            <div className='ActDiffCont'>
              <p className='ActChangeText'>{actDiff}</p>
            </div>
          </div>

          <TradingViewWidgetMain
            CompanyTag={props.CompanyName}
            containerId='AppleHomeGraph'
            chartStyle='10'
          />
        </div>
        <div className='MainViewRight'>
          <p className='AboutText'>About</p>
          <div className='AboutInfoContainer'>
            <p className='AboutInfo'>{about}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewChart;
