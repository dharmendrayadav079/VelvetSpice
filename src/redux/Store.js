import { configureStore } from "@reduxjs/toolkit"; // ✅ CORRECT
import CartSlice from "./Slices/CartSlice";
import CategorySlice from "./Slices/CategorySlice"
import Search from "./Slices/Search"
const Store =configureStore({
    reducer:{
        cart:CartSlice,
        category:CategorySlice,
        search:Search,
    },

    
});

export default Store;