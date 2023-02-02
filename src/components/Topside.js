import './Topside.css';
import { GoSearch } from 'react-icons/go'
import { useState } from 'react';

const Topside = () => {
    const [show, setShow] = useState(false);
    const ChangeStateOne = () => {
        if (show === false) {
            setShow(true);
        }
    }
    const ChangeStateTwo = () => {
        if (show === true) {
            setShow(false);
        }
    }
    return (
        <>
            <div className='greyBox'>
                <a className={`ClickOut${show}`} onClick={ChangeStateTwo}></a>
                <div className='colWrap'>               
                    <a className='wrapper' onClick={ChangeStateOne}>
                        <GoSearch className='SearchIcon' size={19} />
                        <input className={`searchBar${show}`} placeholder='Search for stocks, ETFs & more'>
                        </input>
                    </a>
                    <div className={`DropDownOptions${show}`}>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Topside;