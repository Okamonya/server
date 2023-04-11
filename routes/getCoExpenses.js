const express = require('express')
const router = express()

const db = require('../config/db')

router.get('/', (req, res) => {



    db.query(`
    SELECT * 
    FROM comexpenses
    `, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })

})

router.delete('/', (req, res) => {

    const idcomexpenses = req.params.idcomexpenses
console.log(idcomexpenses)
    db.query(`
    DELETE FROM comexpenses
Where idcomexpenses= ?`,[idcomexpenses],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })

})


module.exports = router