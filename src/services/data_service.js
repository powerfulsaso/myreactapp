import data from "../data/posts.json";

export function getPosts() {
    return new Promise((resolve, rejected) => {
        window.setTimeout(() => {
            resolve([...data]);
        }, 3000);
    });
}