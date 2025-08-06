import React from "react";
import ContactForm from "./components/ContactForm";
import './App.css';

function App() {
  return (
    <div className="App">
<img src="/images/profile.jpg" alt="Chandini Battula" className="profile" />
      <header>
                <h1 style={{ textAlign: "center", marginTop: "10px" }}>Chandini Battula</h1>
        <p style={{ textAlign: "center" }}>QA Engineer | Python & Selenium | IT Student at TU Clausthal</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am an aspiring IT professional with over 5 years of industry experience in Quality Assurance and Software Testing,
          currently pursuing a Master's in Informatik at TU Clausthal, Germany. I have a strong foundation in software testing
          (manual and automation), data analysis, and IT process optimization, with hands-on experience in tools and technologies
          such as Python, Selenium, SQL, Power BI, UiPath, and Azure DevOps.
          <br /><br />
          My skill set combines analytical thinking with technical implementation, allowing me to contribute effectively in diverse IT roles
          — whether it’s ensuring software quality, streamlining operations through automation, or extracting insights from data.
          <br /><br />
          I am now seeking opportunities as a Working Student or Intern in the fields of QA, Software Development, Data Analytics, or IT Support,
          where I can apply my knowledge, continue learning, and make a meaningful impact.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li><strong>Programming & Automation:</strong> Python, Selenium, Pytest, UiPath, VBA, Automation Anywhere</li>
          <li><strong>Data Analysis & Visualization:</strong> SQL, Power BI</li>
          <li><strong>DevOps & Tools:</strong> Azure DevOps, Git</li>
          <li><strong>Testing & QA:</strong> Manual Testing, Test Case Design, Bug Tracking</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>Selenium Test Framework</strong> – Automated web tests with Pytest and Page Object Model.</li>
          <li><strong>Data Dashboard</strong> – Visualized insights using Power BI and Excel.</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: chandini09.battula@gmail.com</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/battula-chandini-8b2996155/" target="_blank" rel="noreferrer">View Profile</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/Chandini24698" target="_blank" rel="noreferrer">yourusername</a>
        </p>
      </section>

      {/* If you have a ContactForm component, include it here */}
      {/* <ContactForm /> */}

    </div>
  );
}

export default App;
