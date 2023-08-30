import { configureStore } from "@reduxjs/toolkit";
import listReducer from './Slice/Slice';



export const store = configureStore({
    reducer:{
      list:listReducer
    }
});
