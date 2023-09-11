import Navbar from "./components/navbar"
import SearchBar from './components/search_bar';
import PostList from './components/post_list';
import Profile from "./components/profile";
import { useState } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  function searchKeyword(keyword) {
    setKeyword(keyword);
  }

  return (
    <>
      <Navbar onLogoClick={setShowProfile} onProfileClick={setShowProfile} />
      <div className="d-flex m-2">
        <SearchBar searchKeyword={searchKeyword} />
      </div>
      {showProfile
        ? <Profile />
        : <main className="container-fluid m-2">
          <PostList keyword={keyword} />
        </main>
      }



    </>
  );
}

export default App
