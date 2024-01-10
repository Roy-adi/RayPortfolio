import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'; // Import the CSS file for styling
import Send from './Send';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3z3g2f9', 'template_fuewe3r', form.current, 'u2p_SVR34Pfr3fU5S')
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const handleToastClose = () => {
    setShowSuccessMessage(false);
  };

  return (
    <>
      <p className='contact-title'>contact me </p>
      <div className="contact-form-wrapper d-flex justify-content-center">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h5 className="title">Keep in touch</h5>
          <p className="description">Feel free to contact me </p>
          <div>
            <input type="text" className="form-control rounded border-white mb-3 form-input" id="name" name='name' placeholder="Name" required />
          </div>
          <div>
            <input type="email" className="form-control rounded border-white mb-3 form-input" name='email' placeholder="Email" required />
          </div>
          <div>
            <textarea
              id="message"
              className="form-control rounded border-white mb-3 form-text-area"
              rows="5"
              cols="30"
              name='message'
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="submit-button-wrapper">
            <Send onSubmit={sendEmail} />
          </div>
        </form>
      </div>

      <ToastContainer autoClose={3000} onClose={handleToastClose} position="top-right" />
      {showSuccessMessage && toast.success('Your message is sent!')}
    </>
  );
};

export default ContactForm;
