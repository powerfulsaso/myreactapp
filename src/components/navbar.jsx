function Navbar() {
    return (
        < nav className="navbar bg-body-tertiary" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./public/icons8-flash-24.png" alt="Logo" width="24" height="24" className="d-inline-block align-text-top" />
                    My React App
                </a>
                <div className="d-flex">
                    <img src="./public/icons8-avatar-24.png" alt="Avatar" width="24" height="24" className="d-inline-block align-text-right" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;