import './Views.css'
import ViewElement from './components/ViewElement'
import TradingViewWidget from '../../Charting/TradingView'
import {VscGraph} from 'react-icons/vsc'


const Views = () => {
    
    return (
        <>
            <div className='ViewContainer'>
                <div className='ViewLeft'>
                    <p className='ViewTitle'>You may be interested in</p>
                    <ViewElement CompanySymbol = "HPE" CallKey = "KHM0G6B8QHEQ0A02"/>
                    <ViewElement CompanySymbol = "MSFT" CallKey = "KHM0G6B8QHEQ0A02"/>
                    <ViewElement CompanySymbol = "INTC" CallKey = "KHM0G6B8QHEQ0A02"/>
                    <ViewElement CompanySymbol = "GOOG" CallKey = "O155PURV9P9PUH7X"/>
                    <ViewElement CompanySymbol = "GOOGL" CallKey = "O155PURV9P9PUH7X"/>
                    <ViewElement CompanySymbol = "NVDA" CallKey = "O155PURV9P9PUH7X"/>

                </div>
                <div className='ViewRight'>
                    <div className='PopularBlock'>
                        <VscGraph className='VscGraph' size={30}/>
                        <p className='PopularText'>Popular Today</p>
                    </div>
                    <div>
                        <TradingViewWidget CompanyTag="GOOGL" containerId = "123" />
                    </div>
                        <div className='Spacing'/>
                    <div>
                        <TradingViewWidget CompanyTag="TSLA" containerId = "345"/>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Views