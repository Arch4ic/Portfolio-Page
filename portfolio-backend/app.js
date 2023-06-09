/* here we bring backend together and connect to database */

const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const reposRouter = require('./controllers/repos')
const fetch = require('./utils/reposfetch')
const mailRouter = require('./controllers/mailrouter')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

async function connect () {
  try {
    await mongoose.connect(config.MONGODB_URI)
    logger.info('connected to MongoDB')
  } catch (error) {
    logger.error('error connection to MongoDB:', error.message)
  }}

connect()
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/repos', reposRouter)
app.use('/api/email', mailRouter)
app.use(middleware.unkownEndpoint)
app.use(middleware.errorHandler)

fetch.fetch()
module.exports = app