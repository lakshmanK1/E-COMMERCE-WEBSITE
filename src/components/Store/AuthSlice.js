import {createSlice} from '@reduxjs/toolkit'

const TokenData = localStorage.getItem('Ecomm_TokenId');
const AuthSlice = createSlice({
    name:'auth',
    initialState:{
        token:TokenData,
        isLoggedIn:false
    } ,
    reducers:{
        LogIn : (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload;
            localStorage.setItem('Ecomm_TokenId', JSON.stringify(state.token));
            
        },

        LogOut : (state, action)  => {
            state.isLoggedIn = false;
            state.token = null;
            localStorage.removeItem('Ecomm_TokenId');
        },
    }    
});    

export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;
