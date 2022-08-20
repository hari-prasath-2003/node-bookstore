const books = require('../models/books')

const getHomeData = async()=>{
    const data = await books.find().limit(2)
    console.log(data);
    return data
}

module.exports = getHomeData