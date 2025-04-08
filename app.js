const express = require('express')
const app = express()
const helmet = require('helmet')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())

app.use('/api',
    require('./routes/requestRoutes'),
    require('./routes/registerRoutes')
)

module.exports = app