import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";

const Store = configureStore({
    reducer: {auth: authSlice.reducer},


});

export default Store;