import { useEffect, useState } from "react";
import Post from "./post";
import "../css/post_list.css";
import { getPosts } from '../services/data_service';


const initialState = [];

function PostList({ search }) {
    const [posts, setPosts] = useState(initialState);
    const [fetchError, setFetchError] = useState(null);
    const [postChange, setPostChange] = useState(false);

    useEffect(() => {
        getPosts()
            .then((fposts) => {
                if (fposts) {
                    setPosts(fposts);
                    if (postChange == true) {
                        setPostChange(false);
                    }
                    setFetchError(null);
                } else {
                    setPosts(initialState);
                    setFetchError("Error fetching posts...refresh browser!");
                }
            })
            .catch((error) => {
                setPosts(initialState);
            });
    }, [postChange]);

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="d-flex flex-wrap ">
                {posts === initialState
                    ? !fetchError ? "Loading..." : `${fetchError}`
                    : posts
                        .filter(
                            (post) => (search === ""
                                ? true
                                : post.text.toLowerCase().includes(search.toLowerCase())
                                || post.author.username.toLowerCase().includes(search.toLowerCase()))
                        )
                        .map((post, i) => (
                            <Post className="m-1"
                                key={post.id}
                                postValue={post}
                                onPostChange={setPostChange}
                            />
                        ))
                }
            </div>
        </div>
    );
}

export default PostList;