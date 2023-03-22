const axios = require('axios')
const baseUrl = 'https://api.github.com/users/Arch4ic/repos'
const logger = require('./logger')

/* Here fetch repositories from github api and then one by one post them into database */
const fetch = async () => {
  try {
    logger.info('fetching repos....')
    const response = await axios.get(baseUrl)
    const repos = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url
    }))
    logger.info(repos)
    repos.map(repo => {
      const data = { 'name': repo.name, 'description': repo.description, 'url': repo.url }
      return axios.post(`http://localhost:3003/api/repos/${repo.id}`, data)
    })
  } catch (error) {
    logger.error(error)
  }
}

module.exports = {
  fetch
}
