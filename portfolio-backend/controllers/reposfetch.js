const axios = require('axios')
const Repo = require('../models/repo')

const baseUrl = 'https://api.github.com/users/Arch4ic/repos'

const fetch = async () => {
  try {
    const response = await axios.get(baseUrl)
    const repos = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url
    }))
    await Repo.updateMany({}, { repos }, { upsert: true })
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  fetch
}
