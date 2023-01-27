import './Navbar.css';
import { IoMdMenu } from 'react-icons/io'
import { AiOutlineStock } from 'react-icons/ai'
import { MdManageSearch } from 'react-icons/md'
import { useState } from 'react'



const Navbar = () => {
    const [show, setShow] = useState(false);
    const ChangeState = () => {
        if (show === true) {
            setShow(false);
        } else {
            setShow(true);
        }
    }
    return (
        <>
            <div className='TopBar' >
                <a className='MenuLink' onClick={ChangeState}>
                    <IoMdMenu size={21} className='MenuIcon' />
                </a>
                <h1 className='TitleText'>Finance Dummy</h1>
            </div>

            <a className={`clickOut${show}`} onClick={ChangeState}></a>

            <div className={`MenuContainer${show}`}>
                <div className='MenuLogo'>
                    <h1 className='TitleTextMenu'>Finance Dummy</h1>
                </div>

                <a className='HTLink'>
                    <AiOutlineStock size={23} className='icon'/>
                    <p className='MenuText'> Home</p>
                </a>
                <a className='HTLink'>
                    <MdManageSearch size={23} className='icon'/>
                    <p className='MenuText'> Explore Trends</p>
                </a>

                <div className='DivLine'></div>

            </div>

        </>
    )
}

export default Navbar;