const express = require("express")
const app = express()
const homeRoute = require('./route/home')
const mongoose = require('mongoose')

app.set("view engine","ejs")
app.use("/home",homeRoute)
mongoose.connect("mongodb://localhost:27017/bookstore")


app.listen(3000)