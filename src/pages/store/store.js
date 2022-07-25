import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";
import userInfoSlice from "./reducers/userInfoSlice";
import menuSlice from "./reducers/menuSlice";


const store = configureStore({
    reducer: {
        counter: counterSlice,
        userInfo: userInfoSlice,
        menus: menuSlice
    }
})
export default store