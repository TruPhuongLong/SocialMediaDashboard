import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import CONSTANCE from '../libs/constance';

module.exports = app => {

    //POST / signup:
    app.post('/signup', (req, res) => {
        const body = req.body;
        let userdata = {
            email: body.email,
            username: body.username,
            password: body.password,
            passwordConf: body.passwordConf,
        }
        let newUser = new User(userdata);
        newUser.save()
            .then(user => {
                const { email, username } = user;
                res.send({ email, username });
            })
            .catch(error => {
                res.status(400).send(error);
            })
    })

    //POST / login:
    app.post('/login', (req, res) => {
        const body = req.body;
        User.authenticate(body.email, body.password, (err, user) => {
            if (err) {
                res.send(err);
            }
            if (!user) {
                res.status(404).send();
            }
            const {_id, username, email} = user;
            const _user = {_id, username, email};
            const token = jwt.sign(_user, CONSTANCE.JWT_KEY, {expiresIn: "15d"});
            res.json({token});
        })
    });

    // GET /logout
    app.get('/logout', function (req, res, next) {
        if (req.session) {
            // delete session object
            req.session.destroy(function (err) {
                if (err) {
                    return next(err);
                } else {
                    return res.redirect('/');
                }
            });
        }
    });


    //API:
    //GET /list users
    app.get('/api/users', (req, res)=>{
        User.find()
        .then(users => {
            return users.map(user => {
                const {_id, email, username} = user;
                return {_id, email, username};
            })
        })
        .then(users => {
            res.send(users);
        })
        .catch(error => {
            res.send(error);
        })
    })
}