const express = require('express')
const sequelizeConnection = require('../Config/connection')
const Services = require('../Models/services.model')
const verifySession = require('../Middleware/auth.middleware')

const serviceRoute = express.Router()


serviceRoute.get("/services", async(req, res) => {
    const services = await Services.findAll()
    res.send(services)

})

serviceRoute.post("/services", async(req, res) => {

    console.log(req.body)

    try {
        const added = await Services.create(req.body)
        res.status(200).json({
            added: true,
            message: "a service has been added successfully"
        })

    } catch (err) {
        res.json({ error: err.message })

    }

})

module.exports = serviceRoute;