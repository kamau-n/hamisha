const express = require('express')
const sequelizeConnection = require('../Config/connection')
const Booking = require('../Models/bookings.model')
const Users = require('../Models/user.model')
const Bill = require('../Models/bill.model')
const verifySession = require('../Middleware/auth.middleware')
const Items = require('../Models/item.model')



const bookingRoute = express.Router()

// This route is for making a booking
bookingRoute.post("/book", async(req, res) => {

    console.log("Bookig route has been acceesed")
    console.log(req.body)
    try {

        Booking.create(req.body)
            .then((msg) => {
                if (msg != null) {
                    res.status(200).json({ msg: "booking has been made successfully", booked: true, id: msg.booking_id })
                }
            })
            .catch((err) => {
                // res.json({ msg: "unable to complete booking", booked: false })
            })
    } catch (err) {

        res.json({ msg: "Internal err", err })
    }



})


// this route is for getting all the bookings

bookingRoute.get("/book", async(req, res) => {
    const bookings = await Booking.findAll({
        include: Users
    })
    res.send(bookings)
})



//this route is for maing the bill
bookingRoute.post("/booking/bill", async(req, res) => {

    try {
        const bill = await Bill.create(
            req.body


        )
        res.send(bill)


    } catch (err) {

        res.send(err)

    }





})


// this route is for adding an item to the booking
bookingRoute.post("/booking/item", async(req, res) => {
    console.log(req.body)
    try {
        Items.create(req.body)
            .then((created) => {
                if (created != null) {
                    res.json({ msg: "item added successfully", added: true })
                } else {
                    res.json({ msg: "item was not added ", added: false })

                }
            })
            .catch((err) => res.send(err))

    } catch (err) {
        res.send(err)

    }
})

//this route is getting all the billss
bookingRoute.get("/booking/bill", async(req, res) => {
    const bills = await Bill.findAll({
        include: Booking,
        User
    })
    res.send(bills)



})

// this route is for getting a booking for a specified user
bookingRoute.get("/booking/user/:id", async(req, res) => {

    try {
        const bookings = Booking.findAll({
            where: {
                booking_user_user_id: req.params.id
            }
        })

        res.send(bookings)
    } catch (e) {
        res.send("unable to get any bookings")
    }

})



module.exports = bookingRoute;