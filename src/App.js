import React from "react";
import ContactForm from "./components/ContactForm";
import './App.css';

function App() {
  return (
    <div className="App">
<img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="Chandini Battula" className="profile" />


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
  <h2>Tech Stack</h2>
  <p>
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
    <img src="https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white" />
    <img src="https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" />
    <img src="https://img.shields.io/badge/Azure%20DevOps-0078D7?style=for-the-badge&logo=azuredevops&logoColor=white" />
  </p>
</section>


      <section>
  <h2>Projects</h2>
  <ul>
    <li>
      <strong>Selenium Test Framework</strong> – Automated web tests with Pytest and Page Object Model.  
      👉 <a href="https://github.com/Chandini24698/selenium-framework" target="_blank">GitHub Repo</a>
    </li>
    <li>
      <strong>Data Dashboard</strong> – Visualized insights using Power BI and Excel.  
      👉 <a href="https://github.com/Chandini24698/data-dashboard" target="_blank">GitHub Repo</a>
    </li>
  </ul>
</section>

<section>
  <h2>Key Achievements</h2>
  <ul>
    <li>Reduced test execution time by 30% with automated regression suite using Pytest.</li>
    <li>Built Power BI dashboards to track application defects over time.</li>
    <li>Improved test coverage from 60% to 90% by redesigning test cases.</li>
  </ul>
</section>

<section>
  <h2>Testimonials</h2>
  <blockquote>
    "Chandini was an exceptional QA engineer in our team – always proactive and focused on quality."  
    <br />– Former Manager, HCL Technologies
  </blockquote>
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
