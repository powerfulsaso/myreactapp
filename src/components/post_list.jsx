import { useEffect, useState } from "react";
import Post from "./post";
import "../css/post_list.css";
import { getPosts } from '../services/data_service';
import { TimeAgo } from "../helpers/time_ago";

const initialState = [];

function PostList({ keyword }) {
    const [posts, setPost] = useState(initialState);

    useEffect(() => {
        getPosts().then((posts) => {
            setPost(posts);
        });
    }, []);

    return (
        // <div className="container-fluid m-2">
        //     <div className="d-flex flex-wrap">
        <div className="d-flex flex-wrap p-5">
            {posts === initialState
                ? "Loading..."
                : posts
                    .filter((post) => (keyword === "" ? true : post.text.toLowerCase().includes(keyword.toLowerCase())))
                    .map((post, i) => (
                        <Post className="m-1"
                            key={i}
                            date={TimeAgo(post.createdAt)}
                            likes={post.likes}
                            author={post.author}
                            image={post.image}
                            comments={post.comments}
                            message={post.text}
                        />
                    ))
            }
        </div>
        // </div>
    );
}

export default PostList;