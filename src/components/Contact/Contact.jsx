import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


import "./Contact.scss"

const defaultFormFields = {
  fullName: "",
  email: "",
  telephone: "",
  message: "",

}

const Contact = () => {

  const form = useRef();

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { fullName, email, telephone, message } = formFields;

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value })
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setLoading(false);
          setFormFields(defaultFormFields);

          setTimeout(() => {
            setSuccess(false);
          }, 2000)
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
          setLoading(false);

          setTimeout(() => {
            setError(false);
          }, 2000);
        }
      )
  }

  return (
    <section id="contact">
      <div className="title">
        <h2>Get In Touch</h2>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-left-title">
            <h3>Contact Information</h3>
          </div>
          <div className="contact-info">
            <div className="contact-info-box">
              <p className='contact-icon'><FontAwesomeIcon icon={faEnvelope} /></p>
              <div className="contact-info-details">
                <span>Email</span>
                <p>v.georgakopoulos.dev@outlook.com</p>
              </div>
            </div>
            <div className="contact-info-box">
              <p className='contact-icon'><FontAwesomeIcon icon={faPhone} /></p>
              <div className="contact-info-details">
                <span>Telephone</span>
                <p>+30 6973980631</p>
              </div>
            </div>
            <div className="contact-info-box">
              <p className='contact-icon'><FontAwesomeIcon icon={faMapMarkerAlt} /></p>
              <div className="contact-info-details">
                <span>Location</span>
                <p>Athens, Greece</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" name="fullName" value={fullName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Telephone</label>
              <input type="tel" id="telephone" name="telephone" value={telephone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" value={email} onChange={handleChange} required />
            </div>
            <div className="message">
              <label htmlFor="message">Message *</label>
              <textarea name="message" id="message" value={message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
            {success && <p className='success-message'>Message sent successfully!</p>}
            {error && <p className='error-message'>Failed to send message. Please try again!</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
