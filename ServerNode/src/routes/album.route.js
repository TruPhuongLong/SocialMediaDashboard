module.exports = app => {
    app.get('/api/albums', (req, res) => {
        res.json({ albums: "i need ..." })
    })
}