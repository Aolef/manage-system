import { createSlice } from "@reduxjs/toolkit"
const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: {},
    reducers: {
        updateUserInfo: (state, action) => {
            console.log(state,action)
            Object.assign(state,action.payload)
            // state.push(JSON.stringify(new Date()))
        }
    }
})
export const { updateUserInfo } = userInfoSlice.actions
export default userInfoSlice.reducer