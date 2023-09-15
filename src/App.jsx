import Navbar from "./components/navbar"
import SearchBar from './components/search_bar';
import PostList from './components/post_list';
import Profile from "./components/profile";
import { useEffect, useState } from "react";
import Login from "./components/login";
import { getUserToken } from "./services/login_service";
import { getProfile } from "./services/data_service";


function App() {
  const [search, setSearch] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [loginOk, setLoginOk] = useState(false);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState(null);

  function onSearch(value) {
    setSearch(value);
  }

  async function onLoginComplete(userName, password) {
    let token = await getUserToken(userName, password);

    if (token != null) {
      localStorage.setItem("token", token);
      setLoginOk(true);
      setError(false);

      //Load profile
      let profileData = await getProfile();
      setProfile(profileData);

    } else {

      setError(true);
      setLoginOk(false);
    }

  }

  useEffect(() => {
    let storedToken = localStorage.getItem("token");

    let loadProfile = true;

    const fetchProfile = async () => {
      //Load profile
      let profileData = await getProfile();
      if (loadProfile) {
        setProfile(profileData);
        //console.log(profileData);
      }

    }

    if (storedToken != null) {
      setLoginOk(true);
      fetchProfile().catch(console.error);

    } else {
      setLoginOk(false);
    }

    return () => loadProfile = false;

  }, [loginOk]);

  return (
    <>
      {!loginOk
        ? <Login onLoginComplete={onLoginComplete} error={error} />
        : <>
          <Navbar onLogoClick={setShowProfile} onProfileClick={setShowProfile} />
          <div className="d-flex m-2">
            <SearchBar searchKeyword={onSearch} />
          </div>
          {showProfile
            ? <Profile avatar={profile?.avatar} username={profile?.username} bio={profile?.bio} />
            : <main className="container-fluid m-2">
              <PostList keyword={search} />
            </main>
          }
        </>
      }

    </>
  );
}

export default App
