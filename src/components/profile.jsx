import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../contexts/user_context";
import Navbar from "./navbar";
import { useContext } from "react";

function Profile() {

    const { isLogin, profile, onLogout } = useContext(UserContext); //useUserContext();
    let avatar = profile?.avatar;
    let username = profile?.username;
    let bio = profile?.bio;

    function onBtnLogout() {
        console.log("logout");
        onLogout();
    }


    return (
        <>
            <Navbar />
            {isLogin
                ? <>
                    <div className="container mt-4" >
                        <div className="d-flex justify-content-center">
                            <div className="col-md-4 text-center">
                                <div className=" d-flex justify-content-center " style={{ margin: "20px" }}>
                                    <img src={avatar} alt="Foto de perfil" className="img-fluid rounded-circle" />
                                </div>
                                <h5><b>{username}</b></h5>
                                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sit magnam atque eos adipisci libero ipsum aspernatur eveniet sapiente similique consectetur, perspiciatis, cum, tempore temporibus provident dolorum nisi laboriosam enim!</p> */}
                                <p>{bio}</p>
                                <div className="row">
                                    <Link to="/" className="btn btn-primary mt-4">
                                        back
                                    </Link>
                                    <button className="btn btn-secondary mt-4"
                                        key={1}
                                        onClick={() => onBtnLogout()}
                                    >
                                        logout
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </>
                : <Navigate to="/login" replace={true} />
            }
        </>
    )

}

export default Profile;