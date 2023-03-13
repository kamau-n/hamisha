const express = require("express")

const sequelizeConnection = require("./Config/connection");
const Items = require('./Models/item.model')
const userRouter = require("./Routes/user.routes");

const authRouter = require("./Routes/auth.routes")
const bookRoute = require("./Routes/bookings.routes")
const serviceRoute = require("./Routes/services.routes")
const session = require("express-session");

const cors = require("cors");


//const User = require("./Models/user.model")



const app = express()


const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true

}

app.use(express.json())
app.use(cors(corsOptions));

app.use(session({
    name: "Hamisha-session",
    key: "hamisha",
    secret: "this is my secret",
    saveUninitialized: true,
    resave: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 500,
        sameSite: true,

    }



}));





// Testing if  the connection is presnt








sequelizeConnection.authenticate()
    .then(() => {
        console.log("connected successfully")
        sequelizeConnection.sync({ force: false }).then((res) => console.log("everything looks good" + res._model))
            .catch((err) => console.log("there is an error" + err))


    }).catch((err) => {
        console.log("there is an error" + err)
    })









app.use("/", userRouter, authRouter, bookRoute, serviceRoute)






app.listen(5000, (err) => {
    console.log("listening to port 5000")
})