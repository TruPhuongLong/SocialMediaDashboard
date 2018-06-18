import { User } from '../models/user';
import jwt from 'jsonwebtoken';

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
            res.json(_user);
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
}