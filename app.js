const express = require('express')
const app = express()
const helmet = require('helmet')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())

app.use('/api',
    require('./routes/ordersRoutes'),
    require('./routes/registerRoutes')
)

module.exports = app