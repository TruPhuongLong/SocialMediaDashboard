import {Comment} from '../models/comment';
import {ObjectId} from 'mongodb';

module.exports = app => {

    //GET /list comments of post:
    app.get('/api/comments/:postid', (req, res)=>{
        const postid = req.params.postid;

        //validate postid:
        if(!ObjectId.isValid(postid)){
            const err = new Error();
            err.status = 403;
            err.message = 'invalid postid'
            res.send(err);
        }

        //good to go:
        Comment.find({postid})
        .then(comments => {
            res.send(comments)
        })
        .catch(error => res.send(error));
    });

    app.post('/api/comments', (req, res)=>{
        const body = req.body;
        const newComment = new Comment({
            content: body.content,
            userid: body.userid,
            postid: body.postid,
            createat: Date.now()
        })

        // validate userid and postid:
        if(!ObjectId.isValid(newComment.userid) || !ObjectId.isValid(newComment.postid)){
            const err = new Error();
            err.status = 403;
            err.message = 'invalid userid or postid'
            res.send(err);
        }

        // good to go:
        newComment.save()
        .then(comment => res.status(200).send())
        .catch(error => res.send(error));
    });

    app.patch('/api/comments/:id', (req, res)=>{
        const id = req.params.id;

        //validate id:
        if(!ObjectId.isValid(id)){
            res.status(404).send();
        }

        // good to go:
        const body = req.body;
        body.editat = Date.now();
        Comment.findByIdAndUpdate(id, {$set: body}, {new: true})
        .then(comment => {
            if(!comment){
                res.status(404).send();
            }
            res.send(comment);
        })
        .catch(error => res.status(400).send(error));
    });

    app.delete('/api/comments/:id', (req, res)=>{
        const id = req.params.id;

        //validate id:
        if(!ObjectId.isValid(id)){
            res.status(404).send();
        }

        // good to go:
        Comment.findByIdAndRemove(id)
        .then(comment => {
            if(!comment){
                res.status(404).send();
            }
            res.status(200).send();
        })
        .catch(error => res.status(400).send(error));
    });
}