import React from "react";

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        I am a Master’s student in Computer Science with practical experience in Python programming, software QA, and test automation. Passionate about data and AI technologies, I enjoy working in dynamic teams using Agile methodologies and writing clean, maintainable code. I am eager to contribute my skills in IT analysis, QA testing, and data analysis roles.
      </p>

      <h3>Skills</h3>
      <ul>
        <li>Python, Selenium, Pytest</li>
        <li>Power BI, SQL</li>
        <li>UiPath, VBA, Automation Anywhere</li>
        <li>Azure DevOps, Git</li>
      </ul>

      <h2>Resume</h2>
      <p>
        <a href="path_to_your_resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </p>

      <h2>Contact Me</h2>
      <form action="https://formsubmit.co/chandini09.battula@gmail.com" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>

      <p>Email: chandini09.battula@gmail.com</p>
      <p>Phone: +49 176 2698 2841</p>
    </section>
  );
}

export default About;
