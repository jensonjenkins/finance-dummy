import './Home.css';
import { SiIbm } from 'react-icons/si'
import { ImAppleinc } from 'react-icons/im'
import ChartjsDemo from '../../data/ChartjsDemo';
import AppleChart from './HomeComponents/AppleChart';


const Home = () => {
    return (
        <>
            <div className='OutContainer'>
                <div className='LeftCont'>
                    <ChartjsDemo></ChartjsDemo>
                </div>

                <div className='RightCont'>

                    <div className='LeftInterior'>

                        <div className='IBM'>
                            <div className='IBMleft'>
                                <SiIbm size={70} className="IBM-logo"></SiIbm>
                                <p className='IBMname'>IBM - NYSE</p>
                            </div>
                            <div className='IBMright'>
                                <p className='IBMprice'>10,617.87 USD</p>
                                <p className='IBMstats'>+85.32 +0.81% </p>
                            </div>
                        </div>

                        <div className='Portfolio'>

                        </div>

                    </div>


                    <div className='RightInterior'>
                        <div className='AppleStock'>

                            <div className='AppleTop'>
                                <ImAppleinc size={50}></ImAppleinc>
                                <div className='AppleNameTag'>
                                    <p className='AppleName'>Apple Inc.</p>
                                    <p className='AppleSrc'>AAPL - NASDAQ</p>
                                    <p className='ApplePrice'>154.35 USD</p>
                                    
                                    
                                    <div className='DivLineApple'></div>
                                </div>
                                <p className='AppleStats'>+1.35 +0.15%</p>
                            </div>

                            <div className='AppleMid'>

                            </div>

                            <div className='AppleGraph'>
                                <AppleChart></AppleChart>
                            </div>

                        </div>

                        <div className='Microsoft'>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Home