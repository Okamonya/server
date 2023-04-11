const express = require('express')
const router = express()

const bcrypt = require('bcrypt');
const db = require("../config/db")



router.post('/', (req, res) => {
    const user = req.body.user
    const password = req.body.password

    //encrypt the password
    bcrypt.hash(password, 10, (err, hashedPwd) => {
        if (err) {
            console.log(err)
        }

        db.query('INSERT INTO staff (user, password) VALUES (?,?)',
            [user, hashedPwd],
            (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send(result)
                }
            })
    });


})

module.exports = router 