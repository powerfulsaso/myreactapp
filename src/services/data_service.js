// import data from "../data/posts.json";

import axios from 'axios';

// export function getPosts() {
//     return new Promise((resolve, rejected) => {
//         window.setTimeout(() => {
//             resolve([...data]);
//         }, 3000);
//     });
// }

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

export async function getProfile() {
    let token = localStorage.getItem("token");
    let urlBase = "https://three-points.herokuapp.com/api/";
    let urlStr = urlBase + "users/me";

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
