import bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';
import mongoose from 'mongoose';
const MongoStore = require('connect-mongo')(session);

module.exports = app => {
    app.set("json spaces", 4);
    app.set("port", 6789);
    app.use(bodyParser.json());
    app.use(cors());

    //use sessions for tracking logins
    app.use(session({
        secret: 'work hard',
        resave: true,
        saveUninitialized: false,
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        })
    }))
}