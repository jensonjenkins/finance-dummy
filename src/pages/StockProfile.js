import './StockProfile.css'
import Navbar from '../components/Navbar/Navbar'
import HeaderContent from '../components/Topside/components/HeaderContent/HeaderContent'
import ViewChart from './components/ViewChart/ViewChart'
import { useParams } from "react-router-dom";

const StockProfile = () => {
  const { symbol } = useParams();

    return(
        <>
            <Navbar />
            <div className='greyBoxView' >
            <div className='Heads'>
                <HeaderContent CompanySymbol="HPE"/>
                <HeaderContent CompanySymbol="IBM"/>
                <HeaderContent CompanySymbol="NVDA"/>
                <HeaderContent CompanySymbol="MSFT"/>
                <HeaderContent CompanySymbol="NFLX"/>
                </div>
            </div>
            <ViewChart CompanyName = "AAPL"/>


        </>
    )

}
export default StockProfile