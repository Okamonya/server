const express = require('express')
const router = express()

const db = require('../config/db')


router.post('/', (req, res) => {

    const image = req.body.image
    const id = req.body.id

    db.query(`INSERT INTO images ( image, id) VALUES (?,?)`,
        [
            image,
            id
            
        ],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})

module.exports = router