const reposRouter = require('express').Router()
const Repo = require('../models/repo')

reposRouter.get('/', async ( request, response ) => {
  const repos = await Repo.find({})
  response.json(repos)
})

reposRouter.post('/', async ( request, response, next ) => {
  const body = request.body

  const repo = new Repo({
    id: body.id,
    description: body.description,
    name: body.name,
    url: body.html_url
  })
  try {
    const savedRepo = await repo.save()
    response.status(201).json(savedRepo)
  } catch (error) {
    next(error)
  }
})

reposRouter.post('/:id', async (request, response, next) => {
  const { id } = request.params
  const { name, description, url } = request.body

  try {
    const filter = { id }
    const existingDoc = await Repo.findOne(filter)

    if(!existingDoc){
      const newDoc = new Repo({ id, name, description, url })
      await newDoc.save()
      response.status(201).json(newDoc)
    } else {
      const update = {}
      if (name && name !== existingDoc.name) {
        update.name = name
      }
      if (description && description !== existingDoc.description) {
        update.description = description
      }
      if (url && url !== existingDoc.url) {
        update.url = url
      }
      if (Object.keys(update).length > 0) {
        const options = { new: true }
        const updatedDoc = await Repo.findOneAndUpdate(filter, update, options)
        response.json(updatedDoc)
      } else {
        response.json(existingDoc)
      }
    }
  } catch (error) {
    next(error)
  }
})

module.exports = reposRouter