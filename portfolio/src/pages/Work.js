import React, {useEffect, useState} from 'react'
import getAll from '../services/repos'
import Works from '../components/myWorks'

const Work = () => {

  const [repos, setRepos] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
    try {
      const initialRepos = await getAll();
      console.log('promise fulfilled');
      setRepos(initialRepos.data);
      console.log(initialRepos.data)
    } catch (error) {
      console.log('Error fetching repositories:', error);
    }
  }
  fetchdata()
  }, []);

  return (
    <div className='workPage'>
      <h3 style={{color: 'white', fontSize: '40px', marginBottom: '50px'}}>MY WORKS</h3>
      <Works repos={repos} />
    </div>
  )
}
export default Work;