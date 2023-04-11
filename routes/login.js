const express = require('express')
const router = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const db = require("../config/db")
const bcrypt = require("bcrypt");

router.use(cookieParser());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(
  session({
    key: "userId",
    secret: "ems-kedr",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

router.get("/", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });

router.post('/', (req, res) => {
    const user = req.body.user
    const password = req.body.password

    db.query(
        "SELECT * FROM staff WHERE user = ?",
        user,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        res.send({loggedIn: true, result});
                    } else {
                        res.status(401).send({ message: "Wrong username/password combination!"});
                    }
                });
            } else {
                res.status(402).send({ message: "User doesn't exist" });
            }
        }
    );
});

module.exports = router