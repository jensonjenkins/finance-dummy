import './Topside.css';
import { GoSearch } from 'react-icons/go'
import { useState, useEffect } from 'react';
import SearchResult from './components/SearchResult/SearchResult';
import Axios from 'axios';
import HeaderContent from './components/HeaderContent/HeaderContent';

const Topside = () => {
    const [show, setShow] = useState(false);
    const [results, setResults] = useState([]);
    const [inputValue, setInputValue] = useState('');

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

    const fetchResults = async (keyword) => {
        const response = await Axios.get(
            `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=KHM0G6B8QHEQ0A02`
        );
        setResults(response.data.bestMatches.slice(0, 4));
    };

    useEffect(() => {
        if (inputValue) {
            fetchResults(inputValue);
        }
    }, [inputValue]);

    return (
        <>
            <div className='greyBox'>
                <div className='Heads'>

                <HeaderContent Condition ="Up"/>
                <HeaderContent Condition ="Down"/>
                <HeaderContent Condition ="Down"/>
                <HeaderContent Condition ="Up"/>
                <HeaderContent Condition ="Down"/>



                </div>
                <a className={`ClickOut${show}`} onClick={ChangeStateTwo}></a>
                <div className={`colWrap${show}`}>
                    <a className='wrapper' onClick={ChangeStateOne} >
                        <GoSearch className='SearchIcon' size={19} />
                        <input
                            className={`searchBar${show}`}
                            placeholder="Search for stocks, ETFs & more"
                            onChange={(event) => setInputValue(event.target.value)}
                        ></input>
                    </a>

                    <div className={`DropDownOptions${show}`}>

                        {results.map(result => (
                            <SearchResult
                                key={result["1. symbol"]}
                                ResName={result["1. symbol"]}
                                ResSrc={result["2. name"]}
                                ResVal={result["8. currency"]}

                            />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Topside;