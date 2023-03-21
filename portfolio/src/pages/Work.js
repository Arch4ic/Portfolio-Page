import React, {useEffect, useState} from 'react'
import getAll from '../services/repos'
import Works from '../components/myWorks'


// page to show my repositories 
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
      <h2>MY WORKS</h2>
      <div className='workContainer'>
        <Works repos={repos} />
      </div>
    </div>
  )
}
export default Work;