require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const eventRoutes = require('./routes/events')

// express app
const app = express()

app.use(express.json())
// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/events', eventRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port number', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
    
//listen for requests
// app.listen(process.env.PORT, () => {
//     console.log('listening on port number', process.env.PORT)
// })