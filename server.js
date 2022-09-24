// DEPENDENCIES
const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()




// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)
const eventController = require('./controllers/event_controller')
app.use('/events', eventController)
const stageController = require('./controllers/stage_controller')
app.use('/stages', stageController)

// SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.PG_URI)


// try {
//     sequelize.authenticate()
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`)
// } catch (err) {
//     console.log(`Unable to connect to PG: ${err}`)
// }


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})

