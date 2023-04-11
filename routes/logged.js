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


module.exports = router