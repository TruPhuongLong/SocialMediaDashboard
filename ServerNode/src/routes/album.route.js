import {checkAuth} from '../libs/middlewares/auth.middleware';

module.exports = app => {

    app.get('/api/albums', (req, res) => {
        res.json({ albums: "i need ..." })
    })

    app.post('/api/albums', checkAuth, (req, res)=>{
        res.json({message: "auth success"})
    })

    app.patch('/api/albums', (req, res)=>{

    })

    app.delete('/api/albums', (req, res)=>{

    })
}