import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import heroVideo from "../../assets/hero-background.mp4";

import "./Home.scss";

const Home = () => {

  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section id="home">
      <video autoPlay muted loop>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className={`overlay ${isDarkMode ? "dark" : ""}`}></div>
      <div className="home-container">
        <div className="home-title">
          <h1 className="hello">Hello.</h1>
          <h2>
            I'm Vasilis, <span className="role">A Web Developer</span>
          </h2>
          <p>
            I’m learning React and Node.js and exploring full-stack development. <br />
            I enjoy building modern, clean, and interactive web applications.
          </p>
        </div>
        <div className="home-links">
          <a href="https://www.linkedin.com/in/vasilisgeorgakopoulos" target="_blank" rel="noreferrer">Download Cv</a>
          <a href="#portfolio">View my work</a>
        </div>
      </div>
    </section>
  )
}

export default Home
