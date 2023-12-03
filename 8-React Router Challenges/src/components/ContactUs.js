import React from 'react'
import './ContactUs.css'

export const ContactUs = () => {
  return (
    <div className='contact-container'>
      <form className='form-container'>
        {/* <FontAwesomeIcon icon="fa-light fa-user" /> */}
        <i class="fa-solid fa-user"></i>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='tel' placeholder='Phone Number' />
        <input type='text' placeholder='Address' />
        <input type='submit' value='ADD CONTACT'/>
      </form>

    </div>
  )
}

// export default ContactUs
