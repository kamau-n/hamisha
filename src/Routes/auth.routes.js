const express = require('express')
const sequelizeConnection = require('../Config/connection')

const authRouter = express.Router()
const User = require("../Models/user.model")
const { json } = require('body-parser')
const { JsonWebTokenError } = require('jsonwebtoken')
const jwt = require("jsonwebtoken")
const verifyToken = require('../Middleware/auth.middleware');


authRouter.post("/login", async(req, res) => {
    console.log("/login path has been accessed")
    let session;

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


        session = req.session;
        session.user_email = req.body.login_email;
        req.session.user = user;
        //  {
        //     name: user.user_name,
        //     id: user.user_id,
        //     role: "customer",
        //     email: user.user_email

        // }
        console.log(req.session)
        res.status(200).json({ login: true, msg: "login successfully", session: req.session.cookie })

    }






})

module.exports = authRouter;