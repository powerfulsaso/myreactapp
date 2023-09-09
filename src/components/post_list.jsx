import Post from "./post";
import "./post_list.css";

function PostList() {
    return (
        <div className="container-fluid m-2">
            <div className="d-flex flex-wrap">
                <Post className="m-1"
                    date="3d ago"
                    likes="15"
                    author="@turboman"
                    image="./public/img_card_0.jpg"
                    comments="3"
                    message="Pensaban que estaba viejo, pero estoy justo detras de ustedes"
                />
                <Post className="m-1"
                    date="1d ago"
                    likes="1k"
                    author="@goku"
                    image="./public/img_card_1.jpg"
                    comments="0"
                    message="la temporada 2023 no ha sido la mejor, pero se que ganaremos en el 2024"
                />
                <Post className="m-1"
                    date="1min ago"
                    likes="100k"
                    author="@maxfan"
                    image="./public/img_card_2.jpg"
                    comments="300"
                    message="todos saben que @max es el mejor, pero nadie lo quiere aceptar..."
                />
            </div>
        </div>
    );
}

export default PostList;