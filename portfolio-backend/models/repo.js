const mongoose = require('mongoose')

// model creation for repositories collection
const repoSchema = mongoose.Schema({
  id: { type: String, unique: true },
  description: { type: String },
  name: { type: String, unique: true },
  url: { type: String, unique: true }
})

repoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Repo', repoSchema)