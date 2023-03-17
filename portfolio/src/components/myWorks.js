import React from 'react'
import './myWorks.css'
import Button from './Button'
 
/* component to create table for fetched repositories */
const Works = ({ repos }) => {
  console.log(repos)
  return(
    <div>
      <div>
        <table>
          <tbody>
            <tr className='tableHead'>
              <th>Name</th>
              <th>Url</th>
            </tr>
              {repos.map(repo => {
                return (
                  <tr key={repo.id} className='trBody'>
                    <td><Button styling='tdButton' link={repo.url}name={repo.name}></Button></td>
                    <td>{repo.url}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Works