const express = require("express");

const app = express()

const verifySession = (req, res, next) => {
    console.log("you have accessed the middleware")
    if (req.session.user != null) {
        console.log("you are okay to continue")
        next();




    } else {
        res.json({ msg: "login is false" })
        console.log("you do not have a session")
    }




    next();




}


module.exports = verifySession;