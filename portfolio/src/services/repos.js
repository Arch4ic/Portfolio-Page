import axios from 'axios'


const baseUrl = 'https://api.github.com/users/Arch4ic/repos'

const getAll = async () => {
  try {
    const request = await axios.get(baseUrl)
    return request
  }catch(error) {
    console.log(error)
  }
}

export default getAll