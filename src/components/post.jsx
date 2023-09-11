import { useEffect, useState } from "react";



function Post({ date, likes, author, message, image, comments, key }) {
    const [likesCount, setLikesCount] = useState(0);

    return (
        <div className="card m-2" style={{ width: "20rem" }} >
            <img src={image} className="card-img-top" alt="" />
            <div className="card-body">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        {/* Elemento alineado a la izquierda */}
                        <p>{date}</p>

                        {/* <!-- Elemento alineado a la derecha --> */}
                        <button key={key}
                            onClick={() => {
                                var value = likesCount + 1;
                                setLikesCount(value);
                            }}

                            type="button" className="btn btn-danger">
                            <div className="d-flex align-items-center justify-content-between">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg>
                                {likesCount}
                            </div>
                        </button>
                    </div>
                </div>
                <h6><b>{author}</b></h6>
                {/* <h5 className="card-title">{title}</h5> */}
                <p className="card-text">{message}</p>
                <p className="text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                    </svg>
                    Comments ({comments})
                </p>
            </div>
        </ div>
    );
}

export default Post;