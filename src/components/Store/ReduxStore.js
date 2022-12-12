import {configureStore} from '@reduxjs/toolkit'
import AuthReducers from './AuthSlice'

const Store = configureStore({
    reducer: { Auth:AuthReducers }
});

export default Store;