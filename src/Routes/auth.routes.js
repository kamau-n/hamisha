const express = require('express')
const sequelizeConnection = require('../Config/connection')

const authRouter = express.Router()
const User = require("../Models/user.model")
const { json } = require('body-parser')
const { JsonWebTokenError } = require('jsonwebtoken')
const jwt = require("jsonwebtoken")
const verifyToken = require('../Middleware/auth.middleware');


authRouter.get("/login", (req, res) => {
    res.send("okay")
})

authRouter.post("/login", async(req, res) => {
    console.log("/login path has been accessed")


    const user = await User.findOne({
        where: {
            user_email: req.body.login_email,
            user_password: req.body.login_password

        }
    })

    if (user == null) {
        res.json({
            msg: "invalid login credentials",
            login: false
        })
    } else {

        console.log(user.dataValues)
        req.session.user = user.dataValues;






        res.status(200).json({ login: true, msg: "login successfully", user: user.dataValues })

    }







})

authRouter.get("/logout", (req, res) => {
    req.session.destroy()
})

module.exports = authRouter;