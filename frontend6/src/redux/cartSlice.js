import { createSlice } from "@reduxjs/toolkit";
import DUMMY_PRODUCTS from '../data/products';
const initialState = {
    cartItems: DUMMY_PRODUCTS,
    amount: 2,
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState
})

export default cartSlice.reducer;

// console.log('cartSlice :', cartSlice);