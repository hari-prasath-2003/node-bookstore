const express = require('express')
const route = express.Router()
const getHomeData = require("../controller/homeData")


route.get("/",async(req,res)=>{
    const books = await getHomeData()
    res.render("home",{data:books})
})

module.exports = route