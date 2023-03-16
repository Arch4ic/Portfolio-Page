const mongoose = require('mongoose')

const repoSchema = mongoose.Schema({
  id: Number,
  description: String,
  name: String,
  url: String
})

repoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Repo', repoSchema)