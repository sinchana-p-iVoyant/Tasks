import React from 'react'
import './Form.css' 

const DisplayData = (props) => {

  const { data } = props

  return (
    <div>
      <h2>Your Details</h2>
      <div className='details'>
        <div>
          <label>Name:</label>
          <p> { data.name }</p>
        </div>

        <div>
          <label>Email:</label>
          <p> { data.email } </p>
        </div>
       
        <div>
          <label>Contact:</label>
          <p> { data.contact } </p>
        </div>

        <div>
          <label>DOB:</label>
          <p> { data.dob }</p>
        </div>

      </div>
    </div>
  )
}

export default DisplayData
