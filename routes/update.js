const express = require('express')
const router = express()

const db = require('../config/db')


router.put('/', (req, res) => {

    const id = req.body.id
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
    const neaStartDate = req.body.neaStartDate
    const neaEndDate = req.body.neaEndDate
    const cvStartDate = req.body.cvStartDate
    const cvEndDate = req.body.cvEndDate
    const embassyStartDate = req.body.embassyStartDate
    const embassyEndDate = req.body.embassyEndDate
    const visaStartDate = req.body.visaStartDate
    const visaEndDate = req.body.visaEndDate
    const expenses = req.body.expenses
    const schoolTsp = req.body.schoolTsp
    const office = req.body.office
    const gConductEndDate = req.body.gConductEndDate
    const gConductStartDate = req.body.gConductStartDate
    const passportStartDate = req.body.passportStartDate
    const passportEndDate = req.body.passportEndDate
    const visaNumber = req.body.visaNumber
    const medical = req.body.medical
    const ticketDate = req.body.ticketDate

    db.query(`UPDATE employees SET firstName = ?, middleName = ?, lastName = ?, phoneNumber = ?, idNumber = ?, marital = ?, religion = ?, country = ?, nationality = ?, firstKinName = ?, middleKinName = ?, lastKinName = ?, kinPhoneNumber = ?, relation = ?, location = ?, agent = ?, school = ?, neaStartDate = ?, neaEndDate = ?, cvStartDate = ?, cvEndDate = ?, embassyStartDate = ?, embassyEndDate = ?, visaStartDate = ?, visaEndDate = ?, expenses = ?, schoolTsp = ?,  office = ?, gConductStartDate = ?, gConductEndDate = ?, passportStartDate = ?, passportEndDate = ?, visaNumber = ?, medical = ?, ticketDate = ? WHERE id = ${[id]}`,
        [
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
            school,
            neaStartDate,
            neaEndDate,
            cvStartDate,
            cvEndDate,
            embassyStartDate,
            embassyEndDate,
            visaStartDate,
            visaEndDate,
            expenses,
            schoolTsp,
            office,
            gConductStartDate,
            gConductEndDate,
            passportStartDate,
            passportEndDate,
            visaNumber,
            medical,
            ticketDate
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