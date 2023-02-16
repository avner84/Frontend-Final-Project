import './ProductPage.css'

const ProductPage = () => {
  return (
    <div className='productpage'>
      <div className='productpage__right'>
        <div className='right__image'>
          <img src='https://market.marmelada.co.il/images/detailed/6175/PHOTO-2021-08-01-17-29-55__3_.jpg?source_page=products.view' alt='product name' />
        </div>
        <div className='right__info'>
          <p className='right__name'>מוצר 2</p>
          <p className=''>מחיר: 120 ש"ח</p>
          <p><strong>תיאור:</strong> זה מוצר מאוד יקר ומאוד משובח. הוא יעשה אתכם שמחים. גודל המוצר הוא בערך חצי טפח על טפח וזרת. הוא עשוי מחומר מאוד איכותי ולא ניתן להשיג כמוהו בכל העולם</p>
        </div>
      </div>
      <div className='productpage__left'>
        <div className='left__info'>
          <p>
            מחיר: <span>120 ש"ח</span>
          </p>
          <p> סטטוס: <span>במלאי</span></p>
          <p>
            כמות:
            <select>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </p>
          <p>
            <button type="button">הוסף לעגלה</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage