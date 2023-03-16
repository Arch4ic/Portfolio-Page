import axios from 'axios'


const baseUrl = 'http://localhost:3003/api/repos'

const getAll = async () => {
  try {
    const request = await axios.get(baseUrl)
    return request
  }catch(error) {
    console.log(error)
  }
}

export default getAll