import React, { useState } from 'react'
import './Form.css'
import DisplayData from './DisplayData'

const Form = () => {

    // let dataObject = {
    //     name: "",
    //     email: "",
    //     contact: "",
    //     dob: ""
    // }

    const [data, setData] = useState({})

    const [display, setDisplay] = useState(false)

    const handleData = (e) => {
        e.preventDefault()
        console.log(data)
        setDisplay(true)
    }


  return (
    <div>
      <form>
        <div className='one-div'>
            <label>Full Name:</label>
            <input 
                type="text" 
                name="name" 
                id="" 
                placeholder='Full Name' 
                // onChange = {e => {
                //     setData(prev => ({
                //         name : e.target.value,
                //         ...prev
                //     }))
                //     }
                // }
                onChange={e => setData(prev => ({ ...prev, name : e.target.value }))}
                // onChange={(e) => setData({ ...data, name: e.target.value })}
            />
        </div>
        <div className='one-div'>
            <label>Email:</label>
            <input 
                type="email" 
                name="email" 
                id="" 
                placeholder='Email'
                onChange={e => setData(prev => ({ ...prev, email: e.target.value })) }
            />
        </div>
        <div className='one-div'>
            <label>Contact Number:</label>
            <input 
                type="tel" 
                name="contact" 
                id="" 
                placeholder='Contact Number'
                onChange={e => setData(prev => ({ ...prev, contact : e.target.value}))} 
            />
        </div>
        <div className='one-div'>
            <label>DOB:</label>
            <input 
                type="date" 
                name="dob" 
                id="" 
                placeholder='DOB'
                onChange={e => setData(prev => ({ ...prev, dob : e.target.value }))}
            />
        </div>
        <div className='one-div'>
            <button onClick={ handleData }>Submit</button>
        </div>
      </form>
     
      { display && <DisplayData data={data} /> }

    </div>
  )
}

export default Form
