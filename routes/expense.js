const express = require('express')
const router = express()

const db = require('../config/db')

router.post('/', (req, res) => {
    const expense = req.body.expense
    const expenseReason = req.body.expenseReason
    const empolyeeID = req.body.empolyeeID


    db.query(`INSERT INTO expenses ( expense, expenseReason, empolyeeID) VALUES (?,?,?)`,
        [
            expense,
            expenseReason,
            empolyeeID
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