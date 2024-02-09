import {configureStore } from "@reduxjs/toolkit";
import {allReducers} from './index';

const store = configureStore({
    reducer: allReducers
});

export default store;


