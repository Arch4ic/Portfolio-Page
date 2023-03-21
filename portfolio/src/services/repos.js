import axios from 'axios'


const baseUrl = 'api/repos'

const getAll = async () => {
  try {
    const request = await axios.get(baseUrl)
    return request
  }catch(error) {
    console.log(error)
  }
}

export default getAll