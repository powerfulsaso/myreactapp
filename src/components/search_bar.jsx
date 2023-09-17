import { useEffect } from "react";

function SearchBar({ searchKeyword }) {

    useEffect(() => {
        const searchInput = document.getElementById("searchInput");
        searchInput.addEventListener("input", function (e) {
            searchKeyword(e.target.value);
        });
    })

    return (
        <div className="container-fluid ">
            <form className="d-flex" role="search">
                <input className="form-control " type="search"
                    placeholder="Search"
                    aria-label="Search"
                    id="searchInput"
                />
            </form>
        </div>
    );
}



export default SearchBar;