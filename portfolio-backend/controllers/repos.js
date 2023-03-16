const reposRouter = require('express').Router()
const Repo = require('../models/repo')

reposRouter.get('/', async ( request, response ) => {
  const repos = await Repo.find({})
  response.json(repos)
})


module.exports = reposRouter