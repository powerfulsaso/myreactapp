import React, { useState } from "react";
import { useUserContext } from "../contexts/user_context";
import { Navigate } from "react-router-dom";
import Navbar from "./navbar";

function Login() {
    const [userName, setUserName] = useState(""); // Estado para el valor de inputEmail
    const [password, setPassword] = useState(""); // Estado para el valor de inputPassword

    const userContext = useUserContext();

    const handleUserNameChange = (event) => {
        setUserName(event.target.value); // Actualizar el estado del email
        userContext.setUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value); // Actualizar el estado de la contraseña
        userContext.setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();

        userContext.onLoginComplete();
        setUserName("");
        setPassword("");


    };

    const containerStyles = {
        minHeight: '100vh',
        minWidht: '300',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <>
            {
                userContext.isLogin == false
                    ? <>
                        {/* < nav className="navbar bg-body-tertiary" >
                            <div className="container-fluid">
                                <button id="logoBtn" className="navbar-brand btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16" style={{ marginRight: 5 }}>
                                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                                    </svg>
                                    three pics
                                </button>
                            </div>
                        </nav> */}
                        <Navbar />
                        <div className="container-fluid p-4">
                            {/* <div style={containerStyles}> */}
                            {/* <div className="col-md-6 mt-2"> */}
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        {userContext.loginError
                                            ? <div className="alert alert-danger" role="alert">
                                                <b>Invalid username or password </b>
                                            </div>
                                            : ""
                                        }
                                        <div className="form-group mb-3">
                                            <label htmlFor="inputUsername" className="mb-2">
                                                <b>User name</b>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputUsername"
                                                aria-describedby="emailHelp"
                                                value={userName}
                                                onChange={handleUserNameChange}
                                            />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword" className="mb-2">
                                                <b>Password</b>
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="inputPassword"
                                                value={password}
                                                onChange={handlePasswordChange}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-block btn-primary mt-3" onClick={handleLogin}>
                                            Login
                                        </button>

                                    </form>
                                </div>
                            </div>
                            {/* </div> */}

                            {/* </div> */}
                        </div>
                    </>

                    : <Navigate to="/" replace={true} />
            }
        </>);
}


export default Login;