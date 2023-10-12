import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data";


const initialState ={
    userData :userList,
    selectedUser:{}
}


const sliceList = createSlice ({
    name :"SliceList",
    initialState,
    reducers:{
        addUser:(state,action) =>{
            const id = Math.round (Math.random() *100)
            let task = {...action.payload,id}
            state.userData.push(task)
        },
        deleteUser:(state,action)=>{
          state.userData = state.userData.filter((data)=>data.id !== action.payload.id)
        },
        updateUser:(state,action)=>{
            state.userData = state.userData.map((data)=>data.id === action.payload.id ? action.payload : data)
        },
        setSelectedUser:(state,action)=>{
            state.selectedUser = action.payload
        }
    }
})
export const {addUser,deleteUser,updateUser,setSelectedUser} = sliceList.actions
export default sliceList.reducer