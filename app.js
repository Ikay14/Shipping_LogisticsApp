const express = require('express')
const app = express()

// import dotenv
require('dotenv').config()

// import DB connection
const connectDB = require('./db/connectDB')

// import routes 
const authRoute = require('./routes/authRoute')
//  middlewares
app.use(express.json())

//  route usage
app.use('/api/v1/auth', authRoute)

//  
const port = process.env.PORT || 3000

const start = async () => {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
        console.log(`server is listening on ${port}...`);
    })
}

start()