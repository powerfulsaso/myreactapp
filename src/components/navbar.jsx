import { useContext } from "react";
import { UserContext } from "../contexts/user_context";
import { Link } from "react-router-dom";

function Navbar() {

    const userContext = useContext(UserContext); //useUserContext();

    return (
        < nav className="navbar bg-body-tertiary" >
            <div className="container-fluid">
                <Link to="/" replace={true} className="navbar-brand btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16" style={{ marginRight: 5 }}>
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                    </svg>
                    three pics
                </Link>
                {userContext.isLogin
                    ?
                    <div className="d-flex">
                        <Link to="/profile" replace={true} className="btn ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </Link>
                    </div>
                    : ""
                }
            </div>
        </nav >
    );
}

export default Navbar;