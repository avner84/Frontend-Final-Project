import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

const LinkForUser = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
     <li>
        <Link to='/user_store'>החנות שלי</Link>
    </li>
    <li>
        <Link to='/'>ההזמנות שלי</Link>
    </li>
    <li>
        <Link to='/edit_details'>הפרטים שלי</Link>
    </li>
    <li>
       <p onClick={logoutHandler}>התנתקות</p>
    </li>
</>
  )
}

export default LinkForUser