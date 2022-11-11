import { createContext, useCallback, useContext, useMemo, useState } from "react";
import PropTypes from 'prop-types'
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const CREDENTIALS = 'Autenticated'
const USER_CREDENTIALS = 'USER_CREDENTIALS';
const USER_TOKEN = 'USER_TOKEN';
// const cookies = new cookies();


export const AuthContext = createContext();


export const AuthContextProvider = ({children}) =>{
    const navigate = useNavigate();
    const [isAutenticated, setIsAutenticated] = useState(localStorage.getItem(CREDENTIALS) ?? false);
    const [credentials, setCredentials] = useState(localStorage.getItem(USER_CREDENTIALS) ?? null);
 
    // const [token, setToken] = useState(cookies.get(USER_TOKEN) ?? null)


    const login =  useCallback(function(inputs){
        axios.post("http://localhost:3000/api/login", inputs, {withCredentials: true}).then((res) => {
            localStorage.setItem(CREDENTIALS, true)
            localStorage.setItem(USER_CREDENTIALS, JSON.stringify(res.data));
            window.location.replace('');
       
        }).catch((err) => {
            
            console.log(err)
        });
    }, [])

    const logout =  useCallback(function(){
        localStorage.clear()
        window.location.replace('');
    }, [])

    const value =  useMemo(() => ({
        login,
        logout,
        isAutenticated,
        credentials,
        // token,
    }),[login, logout, isAutenticated, credentials]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
}

export function useAuthContext() {
    return useContext(AuthContext);
  }