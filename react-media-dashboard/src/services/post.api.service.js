import { URL_GET_POSTS_PER_USER, URL_GET_ALBUMS_PER_UER, BASE_URL, URL_POST_POSTS } from '../libs/constant';
import { upload } from './upload';
import axios from 'axios';

export const getPostsPerUser = (userid) => {
    return axios.get(URL_GET_POSTS_PER_USER + userid)
        .then(res => res.data)
        .then(posts => posts.map(post => {
            if (post.imageurls && post.imageurls.length) {
                const imageurls = post.imageurls.map(imageurl => BASE_URL + '/' + imageurl);
                const _post = { ...post, imageurls }
                return _post;
            }
            return post;
        }))
        .then(post => {
            console.log(post)
            return post;
        })
        .catch(error => console.log(error));
}

export const getAlbumsPerUser = (userid) => {
    return axios.get(URL_GET_ALBUMS_PER_UER + userid)
        .then(res => res.data)
        .then(imageurlses => imageurlses.map(imageurls => {
            if (imageurls && imageurls.length) {
                return imageurls.map(imageurl => BASE_URL + '/' + imageurl)
            }
            return imageurls;
        }))
        .catch(error => console.log(error));
}


export const postPost = (files, model) => {
    model.userid = '5b27c8dddb3d7719c030f40b';
    return upload(URL_POST_POSTS, files, model);
}



