export const BASE_URL = 'http://localhost:6789';
export const BASE_URL_API = BASE_URL + '/api';

export const URL_GET_USERS = BASE_URL_API + '/users';
export const URL_GET_POSTS_PER_USER = BASE_URL_API + '/posts/listposts/'; // need suffix userid
export const URL_GET_ALBUMS_PER_UER = BASE_URL_API + '/posts/listalbums/'; // need suffix userid
export const URL_POST_POSTS = BASE_URL_API + '/posts';