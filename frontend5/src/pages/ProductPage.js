import './ProductPage.css'
import {useParams} from 'react-router-dom';

import DUMMY_PRODUCTS from '../data/products'

const ProductPage = () => {

  const params = useParams();
  
  const product = DUMMY_PRODUCTS.find(item=>item.productId===params.id)
  console.log('product :', product);
  
  return (
    <div className='productpage'>
      <div className='productpage__right'>
        <div className='right__image'>
          <img src={product.imgUrl} alt={product.title} />
        </div>
        <div className='right__info'>
          <p className='right__name'>{product.title}</p>
          <p className=''>מחיר: {product.price} ש"ח</p>
          <p><strong>תיאור:</strong>{product.description}</p>
        </div>
      </div>
      <div className='productpage__left'>
        <div className='left__info'>
          <p>
            מחיר: <span>{product.price} ש"ח</span>
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