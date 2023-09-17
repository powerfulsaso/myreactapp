import { useEffect, useState } from "react";
import Post from "./post";
import "../css/post_list.css";
import { getPosts } from '../services/data_service';
import { TimeAgo } from "../helpers/time_ago";

const initialState = [];

function PostList({ search }) {
    const [posts, setPosts] = useState(initialState);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        getPosts()
            .then((fposts) => {
                if (fposts) {
                    setPosts(fposts);
                    setFetchError(null);
                } else {
                    setPosts(initialState);
                    setFetchError("Error fetching posts...refresh browser!");
                }
            })
            .catch((error) => {
                setPosts(initialState);
            });
    }, []);

    return (
        // <div className="container-fluid m-2">
        //     <div className="d-flex flex-wrap">
        <div className="d-flex flex-wrap p-5">
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
                            key={i}
                            date={TimeAgo(post.createdAt)}
                            likes={post.likes}
                            author={post.author.username}
                            image={post.image}
                            comments={post.comments.length}
                            message={post.text}
                            postKey={i}
                        />
                    ))
            }
        </div>
        // </div>
    );
}

export default PostList;