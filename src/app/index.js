import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import counterReducer from "../features/counter/counterSlice";
export const allReducers=combineReducers({
    counterReducer,
    todoReducer
});

