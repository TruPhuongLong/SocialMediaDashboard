export const BASE_URL = 'http://localhost:6789';
const BASE_URL_API = BASE_URL + '/api';

//auth url:
export const URL_LOGIN = BASE_URL + '/login';
export const URL_SIGNUP = BASE_URL + '/signup';
export const URL_LOGOUT = BASE_URL + '/logout';

//user api:
export const URL_GET_USERS = BASE_URL_API + '/users';

//post api:
export const URL_POSTS = BASE_URL_API + '/posts'; // for crud action: get, post, patch, delete
export const URL_GET_POSTS_PER_USER = URL_POSTS + '/listposts/'; // need suffix userid
export const URL_GET_ALBUMS_PER_UER = URL_POSTS + '/listalbums/'; // need suffix userid

//comment api:
export const URL_COMMENT = BASE_URL_API + '/comments'


//for upload file:
// importance: name files must be the same in multer:
// example: array('files') -> fd.append('files', f);
export const KEY_FILE_UPLOAD = 'files';

//access_token:
export const ACCESS_TOKEN = 'access_token';