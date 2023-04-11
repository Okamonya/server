const express = require('express')
const router = express()

const db = require('../config/db')

router.post('/', (req, res) => {
    const employeeId = req.body.employeeId
    const firstName = req.body.firstName
    const middleName = req.body.middleName
    const lastName = req.body.lastName
    const phoneNumber = req.body.phoneNumber
    const idNumber = req.body.idNumber
    const marital = req.body.marital
    const religion = req.body.religion
    const country = req.body.country
    const nationality = req.body.nationality
    const firstKinName = req.body.firstKinName
    const middleKinName = req.body.middleKinName
    const lastKinName = req.body.lastKinName
    const kinPhoneNumber = req.body.kinPhoneNumber
    const relation = req.body.relation
    const location = req.body.location
    const agent = req.body.agent
    const school = req.body.school


    db.query(`INSERT INTO employees (employeeId, firstName, middleName, lastName, phoneNumber, idNumber, marital, religion, country, nationality, firstKinName, middleKinName, lastKinName, kinPhoneNumber, relation, location, agent, school) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [
            employeeId,
            firstName,
            middleName,
            lastName,
            phoneNumber,
            idNumber,
            marital,
            religion,
            country,
            nationality,
            firstKinName,
            middleKinName,
            lastKinName,
            kinPhoneNumber,
            relation,
            location,
            agent,
            school
        ],
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})

module.exports = router