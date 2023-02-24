import './ViewElement.css'
import { useState, useEffect } from 'react'
import Axios from 'axios'

const ViewElement = (props) => {

    const [percDiff, setPercDiff] = useState('')
    const [actDiff, setActDiff] = useState('')
    const [openVal, setOpenVal] = useState('')
    const [symbol, setSymbol] = useState('')
    const [CurCondition, setCurCondition]= useState('')
  
    let API_KEY = `${props.CallKey}`
    let COMPANY_NAME = `${props.CompanySymbol}`;
  
    useEffect(() => {
        const cachedData = JSON.parse(localStorage.getItem(COMPANY_NAME))
        if (cachedData) {
          setSymbol(cachedData['Global Quote']['01. symbol'])
          setOpenVal(cachedData['Global Quote']['02. open'])
          setActDiff(cachedData['Global Quote']['09. change'])
          setPercDiff(cachedData['Global Quote']['10. change percent'])
        }
      
        const interval = setInterval(() => {
          Axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${COMPANY_NAME}&apikey=${API_KEY}`).then((response) => {
            setSymbol(response.data['Global Quote']['01. symbol'])
            setOpenVal(response.data['Global Quote']['02. open'])
            setActDiff(response.data['Global Quote']['09. change'])
            setPercDiff(response.data['Global Quote']['10. change percent'])
            localStorage.setItem(COMPANY_NAME, JSON.stringify(response.data))
          })
        }, 600000) // refresh every 60 seconds
      
        return () => clearInterval(interval)
      }, [])
      
  
    useEffect(() => {
      if (percDiff[0] === '-') {
        setCurCondition('Down')
      } else {
        setCurCondition('Up')
      }
    }, [percDiff])
  
    return (
      <>
        <a className='ViewBlock'>
          <div className='NameTag'>
            <p className='TagLetters'>{symbol}</p>  
          </div>
          <div className='BlockTag'>
            <p className='BlockName'>{symbol}</p>
          </div>
          <div className='BlockPrice'>
            <p className='BlockName'>${openVal}</p>
          </div>
          <div className='BlockPrice'>
            <p className={`BlockChangeAct${CurCondition}`}>{actDiff}</p>
          </div>
          <div className={`BlockPercChange${CurCondition}`}>
            <p className={`BlockChange${CurCondition}`}>{percDiff}</p>
          </div>
        </a>
      </>
    )
  }
  
  export default ViewElement;
  