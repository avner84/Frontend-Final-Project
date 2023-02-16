import './RegisterPage.css'

const RegisterPage = () => {
  return (

    <div className='wrapper'>
      <div className='form_container'>
        <div className='heading'>
          <h2>צור חשבון</h2>
        </div>
        <form>         
          <div className='form_wrap'>
            <div className='form_item'>
              <label>שם פרטי</label>
              <input type='text' />
            </div>
          </div>
          <div className='form_wrap'>
            <div className='form_item'>
              <label>שם משפחה</label>
              <input type='text' />
            </div>
          </div>
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
          <div className='form_wrap'>
            <div className='form_item'>
              <label>אימות סיסמה</label>
              <input type='password' />
            </div>
          </div>
          <div className="btn">
			  <input type="submit" value="צור"/>
			</div>
        </form>
      </div>
    </div>

  )
}

export default RegisterPage