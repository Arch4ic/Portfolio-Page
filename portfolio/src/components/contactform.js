import React, { useState } from 'react'
import axios from 'axios'
import './conform.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


//component to create form where user can send me email
const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Send')
  const onSubmit = async(e) => {
    e.preventDefault()
    const { name, email, message } = e.target.elements
    let conForm = {
      name: name.value,
      email: email.value,
      message: message.value
    }
    
    try {
      toast("Message sent!")
      await axios.post('api/email', conForm)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='formContainer'>
      <form className='confom' onSubmit={onSubmit}>
        <div className='div1'>
          <label htmlFor='name'>
            Name
          </label>
          <input className='input1' type='text' id='name' required />
        </div>
        <div className='div1'>
          <label htmlFor='email'>
            Email
          </label>
          <input className='input1' type='email' id='email' required />
        </div>
        <div>
          <label htmlFor='message'>
            Message
          </label>
          <textarea className='input2' id='message' required />
        </div>
        <button className='formButton' type='submit'>
          {formStatus}
        </button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default ContactForm