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
      <div className='workContainer'>
        <h3 style={{color: 'white', fontSize: '70px', marginBottom: '50px'}}>MY WORKS</h3>
        <Works repos={repos} />
      </div>
    </div>
  )
}
export default Work;