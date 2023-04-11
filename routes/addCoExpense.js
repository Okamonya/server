const express = require('express')
const router = express()

const db = require('../config/db')

router.post('/', (req, res) => {
    const title = req.body.title
    const amount = req.body.amount
    const date = req.body.date
    const category = req.body.category
    const description = req.body.description


    db.query(`INSERT INTO comexpenses ( title, amount, date, category, description) VALUES (?,?,?,?,?)`,
        [
            title,
            amount,
            date,
            category,
            description
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