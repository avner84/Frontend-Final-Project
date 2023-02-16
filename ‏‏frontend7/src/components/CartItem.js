import './CartItem.css'

import React from 'react'
import { Link } from 'react-router-dom'


const CartItem = () => {

  return (
    <div className='cartItem'>
        <div className='cartItem__image'>
            <img src='https://market.marmelada.co.il/images/detailed/6175/PHOTO-2021-08-01-17-29-55__3_.jpg?source_page=products.view' alt='product name'/>
        </div>
        <Link to={`/product/${1234}`} className="cartItem__name">
            <p>מוצר 1</p>
        </Link>

        <p className='cartItem__price'>520 ש"ח</p>

        <select className="cartItem__select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

        <button className='cartItem__deleteBtn'>
            <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

export default CartItem