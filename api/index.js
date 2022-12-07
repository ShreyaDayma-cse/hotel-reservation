import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
dotenv.config()
app.use(express.json())
var cors = require('cors');
app.use(cors());

const connect = async() =>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to database!");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB disconnected!")
})

//middlewares
app.use(cors())
app.use(cookieParser())
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.get("/", (req,res) =>{
  res.send("Welcome")
})
app.use((err,req,res,next) =>{
  res.header( "Access-Control-Allow-Origin","*" );
  const errorStatus = err.status ||500
  const errorMessage = err.message || "Something went Wrong"
  return res.status(errorStatus).json({
    success:false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
})

app.listen(process.env.PORT || 5000, ()=>{
    connect()
    console.log(`Server running at port ${process.env.PORT}`)
})