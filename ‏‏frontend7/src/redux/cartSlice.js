import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [],
    totalAmount: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload.product;
            const quantity = action.payload.quantity;            

            const existingProduct = state.cartProducts.find(
                (p) => p.id === product.id
            );
            if (existingProduct) {
                existingProduct.amount += quantity;
                ;
            } else {
                // const newProduct = { ...product, amount: quantity};
                const newProduct = Object.assign(product, {amount: quantity})

                console.log('newProduct :', newProduct);
                
                state.cartProducts.push(newProduct);
            }

            //=====
            let amount = 0;
            let total = 0;
            state.cartProducts.forEach((product) => {
                amount += product.amount;
                total += product.amount * product.price;
            });
            state.totalAmount = amount;
            state.totalPrice = total;

        }
    }
})

export const {addProduct}= cartSlice.actions;

export default cartSlice.reducer;

// console.log('cartSlice :', cartSlice);