import {Comment} from '../models/comment';
import {ObjectID} from 'mongodb';

module.exports = app => {

    app.get('/api/comments', (req, res)=>{

    });

    app.post('/api/comments', (req, res)=>{
        const body = req.body;
        const newComment = new Comment({
            content: body.content,
            userid: body.userid,
            postid: body.postid
        })

        // validate userid and postid:
        if(!ObjectID.isValid(newComment.userid) || !ObjectID.isValid(newComment.postid)){
            const err = new Error();
            err.status = 403;
            err.message = 'invalid userid'
            res.send(err);
        }

        // good to go:
        newComment.save()
        .then(comment => res.status(200).send())
        .catch(error => res.send(error));
    });

    app.patch('/api/comments/:id', (req, res)=>{

    });

    app.delete('/api/comments/:id', (req, res)=>{

    });
}