import Navbar from "./components/navbar"
import SearchBar from './components/search_bar';
import PostList from './components/post_list';
import Profile from "./components/profile";
import { useCallback, useEffect, useState } from "react";
import Login from "./components/login";
import { getUserToken } from "./services/login_service";
import { getPosts, getProfile } from "./services/data_service";

function App() {
  const [search, setSearch] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [loginOk, setLoginOk] = useState(false);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState(null);
  const [userToken, setUserToken] = useState(null);

  function onSearch(value) {
    setSearch(value);
  }

  async function onLoginComplete(userName, password) {
    let token = await getUserToken(userName, password);

    if (token) {
      localStorage.setItem("token", token);

      setLoginOk(true);
      setError(false);

    } else {
      localStorage.removeItem("token");
      setError(true);
      setLoginOk(false);
    }

  }

  function onLogout() {
    localStorage.removeItem("token");
    setShowProfile(false);
    setLoginOk(false);
  }

  const fetchProfile = useCallback(async () => {
    const profileData = await getProfile();
    if (profileData != null) {
      setProfile(profileData);
      setLoginOk(true);
    } else {
      localStorage.removeItem("token");
      setLoginOk(false);
    }
  });


  useEffect(() => {
    // const storedToken = localStorage.getItem("token");
    fetchProfile();

  }, [loginOk]);

  return (
    <>
      <Navbar onLogoClick={setShowProfile} onProfileClick={setShowProfile} loginOk={loginOk} />
      {!loginOk
        ? <Login onLoginComplete={onLoginComplete} error={error} />
        : <>

          <div className="d-flex m-2">
            <SearchBar searchKeyword={onSearch} />
          </div>
          {showProfile
            ? <Profile avatar={profile?.avatar} username={profile?.username} bio={profile?.bio} onLogout={onLogout} />
            : <main className="container-fluid m-2">
              <PostList search={search} />
            </main>
          }
        </>
      }

    </>
  );
}

export default App
