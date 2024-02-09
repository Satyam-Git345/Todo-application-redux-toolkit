import { createSlice } from "@reduxjs/toolkit";


const initialState={
    count:0
}
const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
       incrementCount:(state)=>{
            state.count+=1;   
       },
       decrementCount:(state)=>{
            state.count-=1;
       },
       incrementbyAmount:(state,action)=>{
            state.count+=action.payload;
       },
       decrementbyAmount:(state,action)=>{
        state.count-=action.payload;
   }
    }
});

export const {incrementCount,decrementCount,incrementbyAmount,decrementbyAmount}=counterSlice.actions;
export default counterSlice.reducer;