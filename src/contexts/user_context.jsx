import { createContext, useContext, useEffect, useState } from "react";

import Navbar from "../components/navbar";
import { getProfile, getUserToken } from "../services/login_service";
import Login from "../components/login";


const UserContext = createContext();

function UserContextProvider({ children }) {
    const [profile, setProfile] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState(""); // Estado para el valor de inputEmail
    const [password, setPassword] = useState(""); // Estado para el valor de inputPassword
    const [loginError, setLoginError] = useState(false);

    function IsValidCredential() {
        if (userName == "" || password == "") {
            return false;
        }

        return true;
    }
    async function onLoginComplete() {
        if (IsValidCredential()) {
            let token = await getUserToken(userName, password);

            if (token) {
                localStorage.setItem("token", token);

                setIsLogin(true);
                setLoginError(false);

            } else {
                localStorage.removeItem("token");
                setLoginError(true);
                setIsLogin(false);
            }
        }
    }

    function onLogout() {
        localStorage.removeItem("token");
        setIsLogin(false);
    }

    //Verifica si el token es valido
    useEffect(() => {
        getProfile().then((profileData) => {
            if (profileData != null) {
                setProfile(profileData);
                setIsLogin(true);
            } else {
                localStorage.removeItem("token");
                setIsLogin(false);
            }
        }).catch((error) => { })
    }, [isLogin]);


    return (
        <UserContext.Provider
            value={{
                setUserName,
                setPassword,
                loginError,
                onLoginComplete,
                onLogout,
                isLogin,
                profile,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}

export default UserContextProvider;