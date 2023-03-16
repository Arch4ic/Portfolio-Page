const axios = require('axios')
const Repo = require('../models/repo')

const baseUrl = 'https://api.github.com/users/Arch4ic/repos'

const fetch = async () => {
  try {
    const response = await axios.get(baseUrl)
    console.log(response.data)
    const repos = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url
    }))
    const savedRepos = await Repo.insertMany(repos)
    console.log(savedRepos)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  fetch
}
