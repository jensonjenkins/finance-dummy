
import './ViewElement.css'

const ViewElement = (props) => {
    return (
        <>
            <a className='ViewBlock'>
                <div className='NameTag'>
                    <p className='TagLetters'>TAG</p>
                </div>
                <div className='BlockTag'>
                    <p className='BlockName'>Name</p>
                </div>
                <div className='BlockPrice'>
                    <p className='BlockName'>Price</p>
                </div>
                <div className='BlockPrice'>
                    <p className={`BlockChangeAct${props.Condition}`}>Change</p>
                </div>
                <div className={`BlockPercChange${props.Condition}`}>
                    <p className={`BlockChange${props.Condition}`}>Change</p>

                </div>
            </a>
        </>
    )
}
export default ViewElement;