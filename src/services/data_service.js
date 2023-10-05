import axios from 'axios';

export async function getPosts() {
    let token = localStorage.getItem("token");
    let urlBase = "https://three-points.herokuapp.com/api/";
    let urlStr = urlBase + "posts";

    try {
        let response = await axios.request({
            headers: { Authorization: `Bearer ${token}` },
            method: "GET",
            url: urlStr

        });
        if (response.status == 200) {
            return response.data;
        }


    } catch (error) {

    }
    return null;
}



export async function addLike(postId) {
    let token = localStorage.getItem("token");
    let urlBase = "https://three-points.herokuapp.com/api/";
    let urlStr = urlBase + `posts/${postId}/like`;

    try {
        let response = await axios.request({
            headers: { Authorization: `Bearer ${token}` },
            method: "POST",
            url: urlStr
        });
        if (response.status == 204) {
            return true;
        }
    } catch (error) {

    }

    return false;
}
