import ProjectCard from "../ProjectCard/ProjectCard";

import podcastPlayerImg from "../../assets/podcast-player.png"
import pongGameImg from "../../assets/pong-game.png"
import expenseTrackerImg from "../../assets/expense-tracker.png"
import myEshopImg from "../../assets/myEshop.jpg"

import { faReact, faNodeJs, faJs, faCss3, faSass } from "@fortawesome/free-brands-svg-icons";

import "./Portfolio.scss";


const projects = [
    {
        id: 1,
        title: "Podcast Player",
        tags: [faReact, faSass, faNodeJs],
        image: podcastPlayerImg,
        githubLink: "https://github.com/v-georgakopoulos/podcast-player-v-react",
        liveLink: "https://podcast-player-v-react.onrender.com/"
    },
    {
        id: 2,
        title: "Pong Game",
        tags: [faJs, faCss3, faNodeJs],
        image: pongGameImg,
        githubLink: "https://github.com/v-georgakopoulos/pong",
        liveLink: "https://pong-7zue.onrender.com/"
    },
    {
        id: 3,
        title: "Expense Tracker",
        tags: [faReact, faSass],
        image: expenseTrackerImg,
        githubLink: "https://github.com/v-georgakopoulos/expense-tracker-v-react",
        liveLink: "https://expense-tracker-v-react.netlify.app/"
    },
    {
        id: 4,
        title: "My Eshop",
        tags: [faReact, faSass, faNodeJs],
        image: myEshopImg,
        githubLink: "",
        liveLink: ""
    },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="portfolio-container">
        {
            projects.map(project => <ProjectCard key={project.id} project={project}/>)
        }
      </div>
    </section>
  )
}

export default Portfolio
