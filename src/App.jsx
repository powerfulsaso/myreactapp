import Navbar from "./components/navbar"
import SearchBar from './components/search_bar';
import PostList from './components/post_list';


function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex m-2">
        <SearchBar />
      </div>
      <main className="container-fluid m-2">
        <PostList />
      </main>

    </>
  );
}

export default App
