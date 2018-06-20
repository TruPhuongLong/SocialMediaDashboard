import { URL_GET_POSTS_PER_USER, URL_GET_ALBUMS_PER_UER } from '../libs/constant';

export const getPostsPerUser = (userid) => {
    return fetch(URL_GET_POSTS_PER_USER + userid)
    .then(posts => posts.json())
    .catch(error => console.log(error));
}

export const getAlbumsPerUser = (userid) => {
    return fetch(URL_GET_ALBUMS_PER_UER + userid)
    .then(imageurlses => imageurlses.json())
    .catch(error => console.log(error));
}



