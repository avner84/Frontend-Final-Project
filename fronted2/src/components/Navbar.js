import './Navbar.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { testActions } from '../redux/store';
import Logo from '../logo/logo.png';
import TestComponente from './TestComponente';


const Navbar = ({click}) => {
    const dispatch = useDispatch();
    const showTestComponente = useSelector((state)=>state.showTestComponente)
    console.log('showTestComponente :', showTestComponente);

    const toggleTestComponenteHandler =()=>{
        dispatch(testActions.toggleTestComponente())
    }

    return (
        <nav className='navbar'>
            
                    <div className='navbae_right_erea'>
                        <div className='navbar_logo'>
                            <Link to='/'><img src={Logo} alt='logo' /></Link>
                        </div>
                    </div>
                    <button style={{ width: '80px', height:'30px', cursor: 'pointer'}} onClick={toggleTestComponenteHandler}>TEST</button>
                    <div className='navbae_left_erea'>
                        
                        <ul className='navbar_links'>

                            <li style={{ color: 'white'}}>{showTestComponente&&<TestComponente/>}</li>
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