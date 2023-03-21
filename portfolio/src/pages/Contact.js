import React from 'react'
import './Page.css';
import Button from '../components/Button';
import ContactForm from '../components/contactform';

// page for contact information
const Contact = () => {
  return (
    <div className='contactPage'>
      <div className='contactContainer'>
        <h2>CONTACT</h2>
        <ContactForm />
      </div>
      <div className='contactContainer2'>
        <Button styling='ghButton' link='https://github.com/Arch4ic'></Button>
        <Button styling='linkButton'link='https://www.linkedin.com/in/EmilMustonenFI/'></Button>
        <Button styling='shareButton' link='https://linktr.ee/emilmustonen'></Button>
      </div>
    </div>
  )
}

export default Contact;