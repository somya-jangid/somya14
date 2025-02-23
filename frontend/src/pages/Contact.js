import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Your Name" />
        <label>Email</label>
        <input type="email" placeholder="Your Email" />
        <label>Subject</label>
        <input type="text" placeholder="Subject" />
        <label>Message</label>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;