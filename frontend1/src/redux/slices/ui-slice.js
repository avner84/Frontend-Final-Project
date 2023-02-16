import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: { isRegisteredUserLoggedIn: true },
    reducers: {
        registeredUserConnection(state) {
             state.isRegisteredUserLoggedIn = !state.isRegisteredUserLoggedIn;
            // state.isRegisteredUserLoggedIn = true;
        },
        disconnectingRegisteredUser(state) {
            state.isRegisteredUserLoggedIn = false;
        }
    }
})


export const uiActions = uiSlice.actions;

export default uiSlice;