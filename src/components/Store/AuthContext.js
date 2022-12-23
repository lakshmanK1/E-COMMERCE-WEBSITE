import React, { useState } from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const localStorageValue = localStorage.getItem('token');

    const [token, setToken] = useState(localStorageValue);
    const [emailId, setEmailId] = useState([]);

    const userIsLogged = !!token;

    const handleLogIn = (token,email) => {
        setToken(token);
        setEmailId(emailId);    
        localStorage.setItem('token', token);
        localStorage.setItem('email',email);
    }

    const handleLogOut = () => {
        setToken(null);
        setEmailId(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }

    const AuthContextValues = {
        token:token,
        email:emailId,
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