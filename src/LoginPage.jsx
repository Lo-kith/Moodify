import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function ContactForm() {
  const form = useRef();
  // const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pj6epu2',         // ✅ Your Service ID
      'template_pqt2hon',        // ✅ Your new Template ID
      form.current,
      'email_N1AqHsKnERLAQWSpKUtRQ3DS' // ✅ Your Public Key
    )
    .then(() => {
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/');
        setShowSuccess(true);
      }, 3000);
    })
    // .catch((error) => {
    //   console.error(error);
    //   alert('❌ Something went wrong. Please try again.');
    // });

    e.target.reset();
  };

  if (showSuccess) {
    return (
      <div style={thanksContainer}>
        <h2 style={thanksHeading}>✅ Thank you!</h2>
        <p>We’ve received your message. Check your email for confirmation! 🎵</p>
      </div>
    )
  }

  return (
    <form ref={form} onSubmit={sendEmail} style={formStyle}>
      <h2 className="login-title">🎧 Contact Us</h2>

      <label htmlFor="user_email" className='login-label' >Email Address</label>
      <input id="user_email" type="email" name="user_email" required placeholder="you@example.com" />

      <label htmlFor="message" className='login-label'>Your Message</label>
      <textarea id="message" name="message" required placeholder="Tell us what's on your mind..." />

      <button type="submit" className='submit-button'>
        Submit
      </button>
    </form>
  );
}

const formStyle = {
  maxWidth: "400px",
  margin: "40px auto",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  padding: "30px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  background: "#fff",
  boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
};

const thanksContainer = {
  maxWidth: "400px",
  margin: "100px auto",
  textAlign: "center",
  padding: "40px",
  borderRadius: "10px",
  background: "#f0fff0",
  boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
};

const thanksHeading = {
  color: "green",
  marginBottom: "10px"
};

export default ContactForm;
