import './Views.css'

import { Link } from 'react-router-dom'
import ViewElement from './components/ViewElement'
import TradingViewWidget from '../../Charting/TradingView'
import { VscGraph } from 'react-icons/vsc'


const Views = () => {

    return (
        <>
            <div className='ViewContainer'>
                <div className='ViewLeft'>
                    <p className='ViewTitle'>You may be interested in</p>

                    <Link to='/stock-view/' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ViewElement CompanySymbol="AAPL" CallKey="KHM0G6B8QHEQ0A02" />
                    </Link>

                    <Link to='/stock-view/' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ViewElement CompanySymbol="MSFT" CallKey="KHM0G6B8QHEQ0A02" />
                    </Link>

                    <Link to='/stock-view/' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ViewElement CompanySymbol="INTC" CallKey="KHM0G6B8QHEQ0A02" />
                    </Link>

                    <Link to='/stock-view' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ViewElement CompanySymbol="GOOG" CallKey="O155PURV9P9PUH7X" />
                    </Link>

                    <Link to='/stock-view' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ViewElement CompanySymbol="GOOGL" CallKey="O155PURV9P9PUH7X" />
                    </Link>

                    <Link to='/stock-view' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ViewElement CompanySymbol="NVDA" CallKey="O155PURV9P9PUH7X" />
                    </Link>

                </div>
                <div className='ViewRight'>
                    <div className='PopularBlock'>
                        <VscGraph className='VscGraph' size={30} />
                        <p className='PopularText'>Compare Markets</p>
                    </div>
                    <div>
                        <TradingViewWidget 
                        CompanyTag="GOOGL" 
                        containerId="AppleHomeGraph" 
                        chartStyle="3"
                        autoSize={true}
                        />
                    </div>
                    <div className='Spacing' />
                    <div>
                        <TradingViewWidget 
                        CompanyTag="TSLA" 
                        containerId="TeslaHomeGraph" 
                        chartStyle="3"/>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Views