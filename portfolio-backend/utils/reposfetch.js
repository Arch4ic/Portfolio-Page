const axios = require('axios')

const baseUrl = 'https://api.github.com/users/Arch4ic/repos'

const fetch = async () => {
  try {
    console.log('fetching repos....')
    const response = await axios.get(baseUrl)
    const repos = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url
    }))
    console.log(repos)
    repos.map(repo => {
      const data = { 'name': repo.name, 'description': repo.description, 'url': repo.url }
      return axios.post(`http://localhost:3003/api/repos/${repo.id}`, data)
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  fetch
}
