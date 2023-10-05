import { useEffect, useState } from "react";
import { addLike } from "../services/data_service";
import { TimeAgo } from "../helpers/time_ago";

function Post({ postValue, onPostChange }) {
    const [postId, setPostId] = useState(postValue.id);

    function btnAddLike() {
        addLike(postId).then((result) => {
            if (result == true) {
                onPostChange(true);
            }
        }).catch(console.error);
    }

    return (
        <div className="card m-2" style={{ width: "22rem" }} >
            <img src={postValue.image} className="card-img-top" alt="" />
            <div className="card-body">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        {/* Elemento alineado a la izquierda */}
                        <p>{TimeAgo(postValue.createdAt)}</p>

                        {/* <!-- Elemento alineado a la derecha --> */}
                        <button key={postId}
                            onClick={() => {
                                btnAddLike();
                            }}

                            type="button" className="btn btn-danger">
                            <div className="d-flex align-items-center justify-content-between">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg>
                                {postValue.likes}
                            </div>
                        </button>
                    </div>
                </div>
                <h6><b>{postValue.author != null ? postValue.author.username : ""}</b></h6>
                {/* <h5 className="card-title">{title}</h5> */}
                <p className="card-text">{postValue.text}</p>
                <p className="text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                    </svg>
                    Comments ({postValue.comments.length})
                </p>
            </div>
        </ div>
    );
}

export default Post;