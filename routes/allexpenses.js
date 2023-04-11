const express = require('express')
const router = express()

const db = require('../config/db')

router.get('/', (req, res) => {

    
    
    db.query(`
    SELECT * 
    FROM employees
    JOIN expenses
    ON employees.employeeID = expenses.empolyeeID
    `, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
        
})


module.exports = router