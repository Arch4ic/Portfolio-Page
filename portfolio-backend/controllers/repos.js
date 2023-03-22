const reposRouter = require('express').Router()
const Repo = require('../models/repo')

// Here we get all repositories from database
reposRouter.get('/', async ( request, response, next) => {
  try {
    const repos = await Repo.find({})
    response.json(repos)
  } catch (error) {
    next(error)
  }
})

// Repositories can be added manually with this
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

/* This endpoint is to add data to specific item in collection
  If data already exists it checks if any of the field has changed and if so it will update them. If data doesn't exist yet new item is create in the collection
*/
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