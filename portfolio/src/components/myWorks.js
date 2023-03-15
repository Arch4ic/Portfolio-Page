import React from 'react'
import './myWorks.css'
import Button from './Button'

const Works = ({ repos }) => {
  console.log(repos)
  return(
    <div>
      <div className='container'>
        <table>
          <tbody>
            <tr className='tableHead'>
              <th>Name</th>
              <th>Url</th>
            </tr>
              {repos.map(repo => {
                return (
                  <tr key={repo.id}>
                    <td><Button styling='tdButton' link={repo.html_url}name={repo.name}></Button></td>
                    <td>{repo.html_url}</td>
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