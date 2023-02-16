import './SideDrawer.css'
import { Link } from 'react-router-dom';
import LinkForGuest from './links/LinksForGuest'
import LinkForUser from './links/LinksForUser'

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ['sidedrawer'];

  if (show) {
    sideDrawerClass.push("show");
  }
  return <div className={sideDrawerClass.join(" ")}>

    <ul className='sidedrawer__links' onClick={click}>
      <LinkForGuest />
      {/* <LinkForUser/> */}
      <li >
        <Link to='/cart'>
          <i className="fas fa-cart-shopping" />
          <span className='sidedrawer__cartbadge'>4</span>
        </Link>
      </li>
    </ul>

  </div>;

}

export default SideDrawer