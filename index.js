const express = require("express")
const app = express()
const mongoose =require('mongoose')
const Product = require('./models/Product.js')

const productRoute = require('./routes/products.route.js')

require('dotenv').config()

//middleware to use json
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//URI from ENV
const dburi = process.env.MONGO_URI

//ROUTES
app.use('/api/products', productRoute)
 

//CONNECT

mongoose.connect(dburi
  ).then(() => {
    console.log('Connected to the database!')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
})
.catch((error) => {
    console.error('Connection Failed!!', error)
})

