//import "../css/profile.css";

function Profile({ avatar, username, bio }) {
    return (

        <div class="container mt-4" >
            <div className="d-flex justify-content-center">
                <div className="col-md-4 text-center">
                    <div className=" d-flex justify-content-center " style={{ margin: "20px" }}>
                        <img src={"./public/84.jpg"} alt="Foto de perfil" class="img-fluid rounded-circle" />
                    </div>
                    <h5><b>@alex</b></h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sit magnam atque eos adipisci libero ipsum aspernatur eveniet sapiente similique consectetur, perspiciatis, cum, tempore temporibus provident dolorum nisi laboriosam enim!</p>
                </div>
            </div>
        </div>


    )

}

export default Profile;