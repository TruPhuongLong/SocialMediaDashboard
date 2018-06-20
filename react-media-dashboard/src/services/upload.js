import axios from 'axios';
import {KEY_FILE_UPLOAD} from '../libs/constant';

export const upload = (url, files, model) => {
    const fd = new FormData();

    if(files && files.length){
        files.map(file => {
            fd.append(KEY_FILE_UPLOAD, file)
        })
    }

    Object.keys(model).map(key => {
        fd.append(key, model[key]);
    })
    
    return axios.post(url, fd)
        .then(res => res.data)
        .catch(error => console.log(error));
}