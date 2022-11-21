import React, { useState } from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const localStorageValue = localStorage.getItem('token');

    const [token, setToken] = useState(localStorageValue);

    const userIsLogged = !!token;

    const handleLogIn = (token) => {
        setToken(token);     
        localStorage.setItem('token', token)
    }

    const handleLogOut = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    const AuthContextValues = {
        token:token,
        isLoggedIn:userIsLogged,
        LogIn:handleLogIn,
        LogOut:handleLogOut,
    }
    return(
        <AuthContext.Provider value={{AuthContextValues}}>
            {props.children}
        </AuthContext.Provider>
    );
} 

export default AuthContextProvider