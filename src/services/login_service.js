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


