import { useState } from "react";
import aboutImg from "../../assets/profileImg.JPG"
import "./About.scss";

const About = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <section id="about">
            <div className="title">
                <h2>About</h2>
            </div>
            <div className="about-container">
                <div className="image-container">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="box">
                    <p>
                        I started learning web development out of simple curiosity —
                        I just wanted to understand how a website is built.
                        I’ve always liked computers, but I never expected to
                        enjoy coding as much as I do now.
                        What began as an interest quickly became a passion.
                        Before becoming a developer, I worked as a fitness trainer.
                        Changing careers wasn’t easy, but it was a challenge I needed.
                        I had already achieved everything I wanted in my previous field,
                        and I felt it was time for something new — something that would push me to grow.
                        Web development gave me exactly that: a new direction,a new level of creativity,
                        and a new way to build things from scratch.
                        I chose frontend development...
                    </p>

                    <p className={isOpen ? "open" : ""}>
                        because I love the idea of designing
                        and creating something from the ground up, almost like starting with a blank canvas.
                        Through my learning journey, I focused on React, combining structure, creativity, and problem-solving
                        My strongest skills are patience, persistence, and a genuine desire to succeed
                        in whatever I choose to do. Becoming a developer is a decision I made for myself,
                        and I am committed to putting in the work required to grow and improve every day.
                        Looking ahead, my goal is to continue learning new technologies and
                        becoming a better developer step by step. My mindset is simple: hard work,
                        discipline, continuous learning, and clean, organized code.I believe that
                        good code reflects good structure, and that’s something I always aim for.
                    </p>

                    <button onClick={handleIsOpen}>{!isOpen ? "Read more" : "Read less"}</button>
                </div>
            </div>
        </section>
    )
}

export default About
