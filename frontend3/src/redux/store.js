import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth-slice';


const store = configureStore({
  reducer:  {auth: authReducer}
});

// const store = configureStore({
//     reducer: testSlice.reducer
// })

export default store;