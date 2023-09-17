import Navbar from "./components/navbar"
import SearchBar from './components/search_bar';
import PostList from './components/post_list';

import { useState } from "react";

import { useUserContext } from "./contexts/user_context";
import { Navigate } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");

  const userContext = useUserContext();

  function onSearch(value) {
    setSearch(value);
  }



  return (
    <>
      <Navbar />
      {userContext.isLogin
        ? <>

          <div className="d-flex m-2">
            <SearchBar searchKeyword={onSearch} />
          </div>

          {/* <main className="container-fluid m-2"> */}
          <PostList search={search} />
          {/* </main> */}
        </>
        : <Navigate to="/login" replace={true} />

      }
    </>
  );
}

export default App
