function Profile({ avatar, username, bio, onLogout }) {

    function onBtnLogout() {
        console.log("logout");
        onLogout();
    }

    return (
        <>
            <div className="container mt-4" >
                <div className="d-flex justify-content-center">
                    <div className="col-md-4 text-center">
                        <div className=" d-flex justify-content-center " style={{ margin: "20px" }}>
                            <img src={avatar} alt="Foto de perfil" className="img-fluid rounded-circle" />
                        </div>
                        <h5><b>{username}</b></h5>
                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sit magnam atque eos adipisci libero ipsum aspernatur eveniet sapiente similique consectetur, perspiciatis, cum, tempore temporibus provident dolorum nisi laboriosam enim!</p> */}
                        <p>{bio}</p>
                        <button className="btn btn-secondary mt-4"
                            key={1}
                            onClick={() => onBtnLogout()}
                        >
                            logout
                        </button>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Profile;