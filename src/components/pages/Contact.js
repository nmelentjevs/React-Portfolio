import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <form data-aos="fade" data-aos-delay="300">
          <div className="section-heading">
            <h1>Contact</h1>
            <h6>Let's work together</h6>
          </div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            required
          />
          <label htmlFor="services">Subject:</label>
          <select name="services" id="services">
            <option value="">Web Design</option>
            <option value="">Web Developement</option>
            <option value="">Other</option>
          </select>
          <label htmlFor="subject">Message:</label>
          <textarea name="subject" id="subject" cols="10" rows="10" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
