import React from "react";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import './App.css';

function App() {
  return (
    <div className="App container">
      <header className="header">
        <img
          src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
          alt="Chandini Battula"
          className="profile"
        />
        <h1>Chandini Battula</h1>
        <p>QA Engineer | Python & Selenium | IT Student at TU Clausthal</p>
      </header>

      <section className="about">
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

      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <p className="badges">
          <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
          <img src="https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white" alt="Selenium" />
          <img src="https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" alt="Power BI" />
          <img src="https://img.shields.io/badge/Azure%20DevOps-0078D7?style=for-the-badge&logo=azuredevops&logoColor=white" alt="Azure DevOps" />
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Selenium Test Framework</strong> – Automated end-to-end web testing using Python, Pytest, and the Page Object Model design pattern.  
            👉 <a href="https://github.com/Chandini24698/selenium-framework" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
          <li>
            <strong>Data Dashboard</strong> – Visualized insights using Power BI and Excel.  
            👉 <a href="https://github.com/Chandini24698/data-dashboard" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
          <li>
            <strong>QA Metrics Dashboard</strong> – Analyzed QA defect data and built interactive visualizations using Plotly.  
            👉 <a href="https://github.com/Chandini24698/qa-metrics-dashboard-python" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
        </ul>
      </section>

      <section className="achievements">
        <h2>Key Achievements</h2>
        <ul>
          <li>Reduced test execution time by 30% with automated regression suite using Pytest.</li>
          <li>Built Power BI dashboards to track application defects over time.</li>
          <li>Improved test coverage from 60% to 90% by redesigning test cases.</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          "Chandini was an exceptional QA engineer in our team – always proactive and focused on quality."  
          <br />– Former Manager, HCL Technologies
        </blockquote>
      </section>

      <section className="blog">
        <h2>Blog</h2>
        <ul>
          <li>
            <strong>How I Built My First Automation Project Using Python and Selenium</strong>
            <p>
              A quick overview of my first automation project where I used Python and Selenium to automate web testing tasks. 
              <a href="https://github.com/Chandini24698" target="_blank" rel="noopener noreferrer"> Read more</a>
            </p>
          </li>
          <li>
            <strong>Creating Dashboards Using Python and Plotly</strong>
            <p>
              I built an interactive dashboard using Python and Plotly to visualize data from a CSV file. 
              <a href="https://github.com/Chandini24698" target="_blank" rel="noopener noreferrer"> Read more</a>
            </p>
          </li>
          <li>
            <strong>Getting Started with GitHub Pages for Your Portfolio</strong>
            <p>
              A beginner's guide to hosting your portfolio for free using GitHub Pages. 
              <a href="https://github.com/Chandini24698" target="_blank" rel="noopener noreferrer"> Read more</a>
            </p>
          </li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: chandini09.battula@gmail.com</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/battula-chandini-8b2996155/" target="_blank" rel="noreferrer">View Profile</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/Chandini24698" target="_blank" rel="noopener noreferrer">Chandini24698</a>
        </p>
      </section>

      {/* Optional Contact Form */}
      {/* <ContactForm /> */}
    </div>
  );
}

export default App;
