import './SideDrawer.css'
import { Link } from 'react-router-dom';

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ['sidedrawer'];

  if (show) {
    sideDrawerClass.push("show");
  }
  return <div className={sideDrawerClass.join(" ")}>

    <ul className='sidedrawer__links' onClick={click}>
      <li>
        <Link to='/register'>הירשם</Link>
      </li>
      <li>
        <Link to='/signin'>התחבר</Link>
      </li>
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