import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "../services/data_service";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

function UserContextProvider({ children }) {
    const [profile, setProfile] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        // fetchProfile();
        getProfile().then((profileData) => {
            if (profileData != null) {
                setProfile(profileData);
            } else {
                localStorage.removeItem("token");
                navigate("/login");
            }
        }).catch((error) => { })
    }, []);

    if (!profile) {
        return (
            <div className="p-5 text-center">
                <div className="spinner-border text-primary" role="status" />
            </div>
        );
    }

    return (
        <UserContext.Provider
            value={{
                profile,
            }}
        >
            <Navbar onLogoClick={null} onProfileClick={null} loginOk={null} />
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}

export default UserContextProvider;