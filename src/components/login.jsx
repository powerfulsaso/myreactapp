import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user_context";
import { Navigate } from "react-router-dom";
import Navbar from "./navbar";
import { getUserToken } from "../services/login_service";

function Login() {
    const [userName, setUserName] = useState(""); // Estado para el valor de inputEmail
    const [password, setPassword] = useState(""); // Estado para el valor de inputPassword
    const [onError, setError] = useState(false);

    const userContext = useContext(UserContext); //useUserContext();

    const handleUserNameChange = (event) => {
        setUserName(event.target.value); // Actualizar el estado del email

    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value); // Actualizar el estado de la contraseña

    };

    function IsValidCredential() {
        return !(userName == "" || password == "");
    }

    const handleLogin = (event) => {
        event.preventDefault();

        if (IsValidCredential()) {
            getUserToken(userName, password).then((token) => {
                setError(false);
                setPassword("");
                setUserName("");
                userContext.onLoginComplete(token);

            }).catch((err) => {
                setError(true);
            });
        } else {
            setError(true);
        }
    };

    return (
        <>
            {
                !userContext.isLogin
                    ? <>
                        <Navbar />
                        <div className="container-fluid p-4">
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        {onError
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
                        </div>
                    </>
                    : <Navigate to="/" replace={true} />
            }
        </>);
}


export default Login;