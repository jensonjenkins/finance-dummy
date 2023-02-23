import './HeaderContent.css'

import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill } from 'react-icons/bs'
const HeaderContent = (props) => {

    return (
        <>
            <a className='TinyContainer'>
                <div className='arrowIcon'>
                    <BsFillArrowUpSquareFill className={`BsFillArrowUpSquareFill${props.Condition}`} size={35} />
                    <BsFillArrowDownSquareFill className={`BsFillArrowDownSquareFill${props.Condition}`} size = {35}/>
                </div>
                <div className='tinyStats'>
                    <div className='tinyLeft'>
                        <p className='tinyTitle'>Name</p>
                        <p className='tinyPrice'>StockPrice</p>

                    </div>
                    <div className='tinyRight'>
                        <div className='tinyPerc'>
                            <p className={`tinyChange${props.Condition}`}>perc</p>
                            <p className={`tinyChange${props.Condition}`}>diff</p>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}
export default HeaderContent