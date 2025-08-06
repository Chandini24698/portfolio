import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Thank you for your message! I will get back to you soon.");
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>

      {formStatus && <p className="form-status">{formStatus}</p>}

      <div className="contact-info">
        <p>Email: <a href="mailto:chandini09.battula@gmail.com">chandini09.battula@gmail.com</a></p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/battula-chandini-8b2996155/"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Chandini24698"
            target="_blank"
            rel="noreferrer"
          >
            Chandini24698
          </a>
        </p>
      </div>
    </section>
  );
}

export default ContactForm;
