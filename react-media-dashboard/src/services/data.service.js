import axios from 'axios';
import {KEY_FILE_UPLOAD} from '../libs/constant';

export const get = (url) => {
    return axios.get(url)
        .then(res => res.data)
        .catch(error => console.log(error));
}

export const post = (url, model) => {
    return axios.post(url, model)
        .then(res => res.data)
        .catch(error => console.log(error));
}

export const postForm = (url, model, files) => {
    const fd = new FormData();

    if(files && files.length){
        files.map(file => {
            fd.append(KEY_FILE_UPLOAD, file)
        })
    }

    Object.keys(model).map(key => {
        fd.append(key, model[key]);
    })
    
    return post(url, fd);
}

export const patch = (url, model) => {
    return axios.patch(url, model)
        .then(res => res.data)
        .catch(error => console.log(error));
}

export const patchForm = (url, model, files) => {
    const fd = new FormData();

    if(files && files.length){
        files.map(file => {
            fd.append(KEY_FILE_UPLOAD, file)
        })
    }

    Object.keys(model).map(key => {
        fd.append(key, model[key]);
    })
    
    return patch(url, fd);
}

export const _delete = (url) => {
    return axios.delete(url)
        .then(res => res.data)
        .catch(error => console.log(error));
}