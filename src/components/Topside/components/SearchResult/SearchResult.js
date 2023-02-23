
import './SearchResult.css';

const SearchResult = (props) =>{
    return(
        <>
        <div className='DivLineResult'/>
        <a className='ResContainer'>
            <div className='ResTitle'>
                <p className='NameResult'>{props.ResName}</p>
                <p className='NameDesc'>{props.ResSrc}</p>
            </div>
            <div className='ResPrice'>
               <p> {props.ResVal}</p> 
               <p> {props.ResCur}</p> 
            </div>
            
        </a>
        
        </>
    )
}

export default SearchResult