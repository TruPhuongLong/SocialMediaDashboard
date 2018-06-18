import jwt from 'jsonwebtoken';
import CONSTANCE from '../constance';

const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodeToken = jwt.verify(token, CONSTANCE.JWT_KEY);
        req.userData = decodeToken;
        next();
    }catch(error){
        res.status(401).json({message: 'auth fail'});
    }
}

module.exports = {checkAuth};