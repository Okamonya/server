const express = require('express')
const router = express()

const db = require('../config/db')

router.get('/',  function(req, res, ext) {
    let search_query =  req.query.search_query
    let query = `SELECT firstName FROM employees
    WHERE firstName LIKE '%${search_query}%'`;

    db.query(query, function(err, data){
        res.send(data)
        console.log(search_query)
    })
    
})

module.exports = router