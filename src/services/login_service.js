import axios from "axios";

let urlBase = "https://three-points.herokuapp.com/api/";

export async function getUserToken(userName, password) {
    var result = null;
    let url = urlBase + "login";
    let body = { "username": userName, "password": password };

    try {
        const response = await axios.post(url, body, {
            headers: { "Content-Type": "application/json" }
        });

        if (response.status == 200) {
            result = response.data.token;
        }
    } catch (error) {

    }


    return result;
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