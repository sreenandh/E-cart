import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice/productSlice';
import wishlistSlice from './slice/wishListSlice'
import cartSlice from './slice/cartSlice'

const cartStore = configureStore({
    reducer: {
        productReducer: productSlice, // Changed from 'productReducer' to 'products' to match the naming convention
        wishListReducer:wishlistSlice,
        cartReducer:cartSlice
    }
});

export default cartStore;