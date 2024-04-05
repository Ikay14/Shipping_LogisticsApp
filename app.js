const express = require('express')
const app = express()

// connecting to the Database(mongodb)
const connectDB = require('./db/connectDB') 

// importing the dotenv 
require('dotenv').config()

// importing routes
const orderRoute = require('./routes/orderRoute')
const dockRoute = require('./routes/dockRoute')
const transactionRoute = require('./routes/transRoute')
const authRoute = require('./routes/authRoute')
const oddRoute = require('./routes/oddRoute')

// importing middlewares
const errorHandlerMiddleware = require('./middlewares/error-handling')
const notFound = require('./middlewares/notFound')
const authenticateUser = require('./middlewares/auth')


app.use(express.json())

// Routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/order', orderRoute)
app.use('/api/v1/dock',authenticateUser, dockRoute)
app.use('/api/v1/transaction', authenticateUser, transactionRoute)
app.use('/api/v1/orders/odd', oddRoute)

app.use(errorHandlerMiddleware) 
app.use(notFound)
const Port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(Port, () => {
            console.log(`server is listening on port ${Port}...`);
        })        
    } catch (error) {
        console.log(error); 
    }
}

start()