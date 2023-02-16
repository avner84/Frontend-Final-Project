import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {showTestComponente:false};

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers:{
    toggleTestComponente(state){
        state.showTestComponente = !state.showTestComponente;
    }
}
})

const testStore = configureStore({
    reducer: testSlice.reducer
})

export const testActions = testSlice.actions;

export default testStore;