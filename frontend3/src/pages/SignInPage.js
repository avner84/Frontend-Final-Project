import './SignInPage.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../redux/auth-slice'
import { useSelector } from 'react-redux'

const SignInPage = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(state=>state.auth.isAuthenticated);
  const loginHandler = () => {
    
    dispatch(authActions.login);
    console.log('isAuth:', isAuth);
    console.log('authActions:', authActions);
  }

  return (

    <div className='wrapper'>
      <div className='form_container'>
        <div className='heading'>
          <h2>התחבר לחשבון</h2>
        </div>
        <form >
          <div className='form_wrap'>
            <div className='form_item'>
              <label>כתובת דוא"ל</label>
              <input type='text' />
            </div>
          </div>
          <div className='form_wrap'>
            <div className='form_item'>
              <label>סיסמה</label>
              <input type='password' />
            </div>
          </div>
          <div className="btn" onClick={loginHandler}>
            <input type="button" value="התחבר" />
          </div>
          <div className='fogate_pass_wrap'>
            <Link >שכחת את הסיסמה?</Link>
          </div>
        </form>
      </div>
    </div>

  )
}

export default SignInPage