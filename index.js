const express =require("express")
const usersRoutes = require("./routes/usersRoutes")
const logger = require("./middlewares/user.logger")
const eventsRoutes = require("./routes/eventsRoutes")
require("dotenv").config()
const connectDB = require("./config/connectDB")
connectDB()

const app = express()

//middlewares
app.use(express.json());
app.use(logger)
app.use("/api/users",usersRoutes)
app.use(eventsRoutes)

//home route
app.get("/", (req, res)=>{
res.status(200).send("<h1>WELCOME TO THE USERS DATABASE</h1>");
})

const PORT = 4000;

app.listen(PORT, ()=>{
    console.log("SERVER IS RUNING ON PORT 4000")
})