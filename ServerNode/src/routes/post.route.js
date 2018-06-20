import {Post} from '../models/post';
import {ObjectId} from 'mongodb';
import multer from 'multer';

const upload = multer({dest: 'uploads/'});

module.exports = app => {
    
    //GET /list posts of each user
    app.get('/api/posts/listposts/:userid', (req, res)=>{
        const userid = req.params.userid;
        Post.find({userid})
        .then(posts => res.send(posts))
        .catch(error => res.send(error));
    })

    //GET /list albums of each user
    app.get('/api/posts/listalbums/:userid', (req, res)=>{
        const userid = req.params.userid;
        Post.find({userid})
        .then(posts => posts.map(post => {
            const {imageurls} = post;
            return imageurls;
        }))
        .then(imageurlses => res.send(imageurlses))
        .catch(error => res.send(error));
    })

    //GET /detal posts 
    app.get('/api/posts/:id', (req, res)=>{
        const id = req.params.id;
        
        // validate id:
        if(!ObjectId.isValid(id)){
            const err = new Error();
            err.status = 403;
            err.message = 'invalid post id'
            res.send(err);
        }

        // good to go:
        Post.findById(id)
        .then(post => res.send(post))
        .catch(error => res.send(error));
    })

    //POST
    app.post('/api/posts', (req, res)=>{
        console.log(req.file);


        const body = req.body;
        const newPost = new Post({
            content: body.content,
            imageurls: body.imageurls,
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

    app.patch('/api/posts/:id', (req, res)=>{
        const id = req.params.id;

        //validate id:
        if(!ObjectId.isValid(id)){
            res.status(404).send();
        }

        // good to go:
        const body = req.body;
        body.editat = Date.now();
        Post.findByIdAndUpdate(id, {$set: body}, {new: true})
        .then(post => {
            if(!post){
                res.status(404).send();
            }
            res.send(post);
        })
        .catch(error => res.status(400).send(error));
    });

    app.delete('/api/posts/:id', (req, res)=>{
        const id = req.params.id;

        //validate id:
        if(!ObjectId.isValid(id)){
            res.status(404).send();
        }

        // good to go:
        Post.findByIdAndRemove(id)
        .then(post => {
            if(!post){
                res.status(404).send();
            }
            res.status(200).send();
        })
        .catch(error => res.status(400).send(error));
    });
}