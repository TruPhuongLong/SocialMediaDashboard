import {Post} from '../models/post';
import {ObjectId} from 'mongodb';

module.exports = app => {

    //GET /list posts of each user
    app.get('/api/posts/:userid', (req, res)=>{
        const userid = req.params.userid;
        Post.find({userid})
        .then(posts => res.send(posts))
        .catch(error => res.send(error));
    })

    //GET /list albums of each user
    app.get('/api/posts/albums/:userid', (req, res)=>{
        const userid = req.params.userid;
        Post.find({userid, imageurl: { $ne: null, $gt: [] }})
        .then(posts => posts.map(post => {
            const {imageurl} = post;
            return imageurl;
        }))
        .then(imageurls => res.send(imageurls))
        .catch(error => res.send(error));
    })

    //POST
    app.post('/api/posts', (req, res)=>{
        const body = req.body;
        const newPost = new Post({
            content: body.content,
            imageurl: body.imageurl,
            createat: Date.now(),
            userid: body.userid,
        })
        if(!ObjectId.isValid(newPost.userid)){
            const err = new Error();
            err.status = 403;
            err.message = 'invalid userid'
            res.send(err);
        }
        newPost.save()
        .then(post => res.status(200).send())
        .catch(error => res.send(error));
    })
}