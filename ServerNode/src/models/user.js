import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    passwordConf: {
        type: String,
        required: true,
    }
});

// encode password for secret before save to database:
UserSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) return next(err);
        user.password = hash;

        bcrypt.hash(user.passwordConf, 10, function (err, hash) {
            if (err) return next(err);
            user.passwordConf = hash;
            next();
        })
    })
})


//authenticate input against database: this func will be call when login
UserSchema.statics.authenticate = function (email, password, callback) {
    User.findOne({ email: email })
        .exec(function (err, user) {
            if (err) {
                return callback(err)
            } else if (!user) {
                const err = new Error();
                err.status = 401;
                err.message = 'email incorrect';
                return callback(err);
            }

            // correct email then check password:
            bcrypt.compare(password, user.password, function (err, result) {
                if(err){
                    return callback(err);
                }
                if (result !== true) {
                    const err = new Error();
                    err.status = 401;
                    err.message = 'password incorrect';
                    return callback(err);
                } 
                return callback(null, user);
            })
        });
}


const User = mongoose.model('User', UserSchema);
module.exports = { User };

