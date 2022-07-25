import { createSlice } from "@reduxjs/toolkit"
const menuSlice = createSlice({
    name: 'menu',
    initialState: [],
    reducers: {
        saveMenus: (state, action) => {
            console.log(state,action)
            Object.assign(state,action.payload)
            // state.push(JSON.stringify(new Date()))
        }
    }
})
export const { saveMenus } = menuSlice.actions
export default menuSlice.reducer