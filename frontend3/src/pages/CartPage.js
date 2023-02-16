import CartItem from '../components/CartItem'
import './CartPage.css'

function CartPage() {
  return (
    <div className='cartPage'>
      <div className='cartPage__right'>
        <h2>עגלת קניות</h2>
        <CartItem />
        <CartItem />
      </div>
      <div className='cartPage__left'>
        <div className='cartPage__info'>
          <p>סך הכל (0) מוצרים</p>
          <p>530 ש"ח</p>
        </div>
        <div>
        <button>מעבר לתשלום</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage