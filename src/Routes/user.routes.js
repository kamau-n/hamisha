const express = require('express')
const sequelizeConnection = require('../Config/connection')

const userRouter = express.Router()
const User = require("../Models/user.model")
const { json } = require('body-parser')
const Booking = require('../Models/bookings.model')



userRouter.get("/", (req, res) => {
    res.send("everything is okay")
})


//getting all the users


userRouter.get('/users', (req, res) => {

    User.findAll()
        .then((users) => res.send(users))
        .catch((err) => { res, json({ msg: err.message }) })

})


userRouter.post("/register", async(req, res) => {
    console.log("register route has been accessed")

    //check if email exists

    const isUsed = await User.findOne({
        where: {
            user_email: req.body.user_email

        }
    })
    if (isUsed == null) {
        User.create(req.body)
            .then((msg) => {

                res.status(200).json({ msg: "user created successfully", registered: true })

            })
            .catch((err) => res.send(err))




    } else {

        res.json({ msg: "user with that email aready exists", registered: false })

    }






})

//getting a user details by email 

userRouter.get("/user", async(req, res) => {

    if (req.session.user) {
        console.log(req.session.user)
        const email = req.session.user.user_email;
        const user = await User.findAll({
            where: {
                user_email: email
            }
        })
        if (user != null) {
            res.status(200).json({ user, logged: true })
            console.log(user)
        } else {
            console.log("no session available");
            res.status(200).json({ user, logged: false })
        }

    } else {
        res.json({ logged: false })
    }
})



module.exports = userRouter;