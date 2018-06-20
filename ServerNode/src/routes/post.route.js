import { Post } from '../models/post';
import { ObjectId } from 'mongodb';
import multer from 'multer';

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/tmp/my-uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })

//   var upload = multer({ storage: storage })

//Setup for save image:
const storage = multer.diskStorage({
    // destination to save file:
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    // set name of file:
    filename: function (req, file, cb) {
        console.log('file get: ', file)
        cb(null, Date.now() + file.originalname);
    }
});

// filter type: jpeg, jpg, png
const fileFilter = (req, file, cb) => {
    console.log('fileFilter', file);
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        err = new Error();
        err.status = 401;
        err.message = 'file accept: image with suffix /jpg, /png, /jpeg';
        cb(err, false);
    }
}

// let all together in here:
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2000 * 2000 * 5
    },
    fileFilter: fileFilter
}).array('files');


//ROUTE
module.exports = app => {

    //GET /list posts of each user
    app.get('/api/posts/listposts/:userid', (req, res) => {
        const userid = req.params.userid;
        Post.find({ userid })
            .then(posts => res.send(posts))
            .catch(error => res.send(error));
    })

    //GET /list albums of each user
    app.get('/api/posts/listalbums/:userid', (req, res) => {
        const userid = req.params.userid;
        Post.find({ userid })
            .then(posts => posts.map(post => {
                const { imageurls } = post;
                return imageurls;
            }))
            .then(imageurlses => res.send(imageurlses))
            .catch(error => res.send(error));
    })

    //GET /detal posts 
    app.get('/api/posts/:id', (req, res) => {
        const id = req.params.id;

        // validate id:
        if (!ObjectId.isValid(id)) {
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
    app.post('/api/posts',upload , (req, res) => {


        // Everything went fine
        console.log('req.file : ', req.file)
        console.log('req.files : ', req.files)
        console.log('req.body :', req.body)

        const body = req.body;
        const newPost = new Post({
            content: body.content,
            // imageurls: [req.file.path],
            imageurls: [],
            createat: Date.now(),
            userid: body.userid,
        })
        if (!ObjectId.isValid(newPost.userid)) {
            const err = new Error();
            err.status = 403;
            err.message = 'invalid userid'
            res.send(err);
        }
        newPost.save()
            .then(post => res.status(200).send())
            .catch(error => res.send(error));

    })

    app.patch('/api/posts/:id', (req, res) => {
        const id = req.params.id;

        //validate id:
        if (!ObjectId.isValid(id)) {
            res.status(404).send();
        }

        // good to go:
        const body = req.body;
        body.editat = Date.now();
        Post.findByIdAndUpdate(id, { $set: body }, { new: true })
            .then(post => {
                if (!post) {
                    res.status(404).send();
                }
                res.send(post);
            })
            .catch(error => res.status(400).send(error));
    });

    app.delete('/api/posts/:id', (req, res) => {
        const id = req.params.id;

        //validate id:
        if (!ObjectId.isValid(id)) {
            res.status(404).send();
        }

        // good to go:
        Post.findByIdAndRemove(id)
            .then(post => {
                if (!post) {
                    res.status(404).send();
                }
                res.status(200).send();
            })
            .catch(error => res.status(400).send(error));
    });
}