import './HomePage.css'
import Product from '../components/Product'

function HomePage() {
  return (
    <div className='homePage'>
      <h2 className='homePage_title'>מוצרים נבחרים</h2>

      <div className='homePage__products'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

    </div>
  )
}

export default HomePage