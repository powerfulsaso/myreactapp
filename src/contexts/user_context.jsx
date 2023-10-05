import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { getProfile } from "../services/login_service";


export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [profileData, setProfile] = useState(null);
    const [logged, setIsLogin] = useState(false);

    const onLoginComplete = useCallback((token) => {
        if (token) {
            localStorage.setItem("token", token);
            setIsLogin(true);
        }
    }, [setIsLogin]);

    const onLogout = useCallback(() => {
        setIsLogin(false);
        localStorage.removeItem("token");
    }, [setIsLogin]);

    //Verifica si el token es valido
    const validateToken = () => {

        getProfile().then((profileData) => {
            if (profileData != null) {
                setProfile(profileData);
                setIsLogin(true);
            } else {
                localStorage.removeItem("token");
                setIsLogin(false);
            }
        }).catch((error) => { })
    }

    const isLogin = useMemo(() => {
        return logged;
    }, [logged]);

    const profile = useMemo(() => {
        return profileData;
    }, [profileData]);


    useEffect(() => {
        validateToken();
    }
        , [isLogin]
    );


    return (
        <UserContext.Provider
            value={{
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


export default UserContextProvider;