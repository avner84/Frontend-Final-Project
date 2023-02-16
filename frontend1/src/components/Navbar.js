import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { uiActions } from '../redux/slices/ui-slice';
import {testActions} from '../redux/storeFolder/testStore'

import './Navbar.css'
import Logo from '../logo/logo.png';
import TestComponente from './TestComponente';


const Navbar = ({click}) => {
    const showRegisteredUserMenu = useSelector((state)=> state.ui.isRegisteredUserLoggedIn);
    const dispatch = useDispatch();
    const test = useSelector((state)=>state.TestComponente)
      
    const toggleGuestMenusHandler = ()=>{
        dispatch(uiActions.registeredUserConnection);
    };

const toggleTestComponenteHandler =()=>{
    dispatch(testActions.toggleTestComponente())
}

    return (
        <nav className='navbar'>
            
                    <div className='navbae_right_erea'>
                        <div className='navbar_logo'>
                            <Link to='/'><img src={Logo} alt='logo' /></Link>
                            <button onClick={toggleTestComponenteHandler}>TEST</button>
                           {test&& <TestComponente/> }
                           
                        </div>
                    </div>
                    <div className='navbae_left_erea'>
                        
                        <ul className='navbar_links'>
                            <li>
                                <Link to='/register'>הירשם</Link>
                            </li>
                            <li>
                                <Link to='/signin'>התחבר</Link>
                            </li>
                            <li className='cart_link_li'>
                                <Link className='cart_link' to='/cart'>
                                <i className="fas fa-cart-shopping" />
                                  <span className='cartLogo_badget'>4</span>
                                </Link>
                            </li>
                        </ul>
                        

                        <div className='hamburger_menu' onClick={click}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                    

              
        </nav>
    )
}

export default Navbar