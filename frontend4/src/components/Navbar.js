import './Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../logo/logo.png';
import LinkForGuest from './links/LinksForGuest'
import LinkForUser from './links/LinksForUser'


const Navbar = ({click}) => {
    return (
        <nav className='navbar'>
            
                    <div className='navbae_right_erea'>
                        <div className='navbar_logo'>
                            <Link to='/'><img src={Logo} alt='logo' /></Link>
                        </div>
                    </div>
                    <div className='navbae_left_erea'>
                        <ul className='navbar_links'>
                            <LinkForGuest />
                            {/* <LinkForUser/> */}
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