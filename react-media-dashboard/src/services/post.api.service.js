import { URL_GET_POSTS_PER_USER, URL_GET_ALBUMS_PER_UER, BASE_URL, URL_POSTS } from '../libs/constant';
import { get, post, postForm, patch, patchForm, _delete } from './data.service';

export const getPostsPerUser = (userid) => {
    return get(URL_GET_POSTS_PER_USER + userid)
        .then(posts => posts.map(post => {
            if (post.imageurls && post.imageurls.length) {
                const imageurls = post.imageurls.map(imageurl => BASE_URL + '/' + imageurl);
                const _post = { ...post, imageurls }
                return _post;
            }
            return post;
        }))
        .then(posts => {
            return posts;
        });
}

export const getAlbumsPerUser = (userid) => {
    return get(URL_GET_ALBUMS_PER_UER + userid)
        .then(imageurlses => imageurlses.map(imageurls => {
            if (imageurls && imageurls.length) {
                return imageurls.map(imageurl => BASE_URL + '/' + imageurl)
            }
            return imageurls;
        }));
}

export const postPost = (user, model, files) => {
    model.userid = user._id;
    return postForm(URL_POSTS, model, files);
}



