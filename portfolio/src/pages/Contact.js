import React from 'react'
import './Page.css';
import Button from '../components/Button';
import ContactForm from '../components/contactform';

// page for contact information
const Contact = () => {
  return (
    <div className='contactPage'>
      <h3 style={{color: 'white', fontSize: '70px'}}>CONTACT</h3>
      <ContactForm />
      <div className='contactContainer'>
        <Button styling='ghButton' link='https://github.com/Arch4ic'></Button>
        <Button styling='fbButton' link='https://www.facebook.com/emil.mustonen/'></Button>
        <Button styling='gmButton' link='mailto:emil.mustonen@gmail.com'></Button>
        <Button styling='linkButton'link='https://www.linkedin.com/in/EmilMustonenFI/'></Button>
        <Button styling='shareButton' link='https://linktr.ee/emilmustonen'></Button>
      </div>
    </div>
  )
}

export default Contact;