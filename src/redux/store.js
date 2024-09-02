import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import productReducer from './features/productSlice';
import cartReducer from './features/CartSlice';
// import shopReducer from './features/ShoppinglistSlice';


const store = configureStore(
    {
        reducer: {

            categoryR: categoryReducer,
            productR :  productReducer,
            cartR: cartReducer,
            // shopR: shopReducer,
        }
    })

    export default store;

    