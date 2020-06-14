import React, { Component } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
//import GoogleMapApi from './components/GoogleMapApi/GoogleMapApi'
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="Contact-container">
            <div className="contact-form">
              <h1>Contact Me</h1>
              <p>I am interested in freelance opportunities -especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using the form bellow.</p>
              <ContactForm />
            </div>
      </div>
    )
  }
}

export default Contact