import React, { useState } from "react";

function Login({ onLoginComplete, error }) {
    const [userName, setUserName] = useState(""); // Estado para el valor de inputEmail
    const [password, setPassword] = useState(""); // Estado para el valor de inputPassword


    const handleUserNameChange = (event) => {
        setUserName(event.target.value); // Actualizar el estado del email
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value); // Actualizar el estado de la contraseña
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (userName == "" || password == "") {

        } else {
            onLoginComplete(userName, password);
            setUserName("");
            setPassword("");
        }

    };

    const containerStyles = {
        minHeight: '100vh',
        minWidht: '300',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div className="container-fluid">
            <div style={containerStyles}>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                {error
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

            </div>
        </div>
    );
}


export default Login;