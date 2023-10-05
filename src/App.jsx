import Navbar from "./components/navbar"
import SearchBar from './components/search_bar';
import PostList from './components/post_list';

import { useContext, useState } from "react";

import { UserContext } from "./contexts/user_context";
import { Navigate } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");

  const { isLogin } = useContext(UserContext); //useUserContext();

  function onSearch(value) {
    setSearch(value);
  }



  return (
    <>
      <Navbar />
      {isLogin
        ? <>

          <div className="d-flex m-2">
            <SearchBar searchKeyword={onSearch} />
          </div>
          <PostList search={search} />
        </>
        : <Navigate to="/login" replace={true} />

      }
    </>
  );
}

export default App
