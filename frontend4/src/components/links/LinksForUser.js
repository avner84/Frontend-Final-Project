import { Link } from 'react-router-dom';

const LinkForUser = () => {
  return (
    <>
     <li>
        <Link to='/user_store'>החנות שלי</Link>
    </li>
    <li>
        <Link to='/'>ההזמנות שלי</Link>
    </li>
    <li>
        <Link to='/edit_details'>פרטים אישיים</Link>
    </li>
    <li>
       <p>התנתקות</p>
    </li>
</>
  )
}

export default LinkForUser