import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data";


const initialState ={
    data :userList,
}


const sliceList = createSlice ({
    name :"SliceList",
    initialState
})

export default sliceList.reducer