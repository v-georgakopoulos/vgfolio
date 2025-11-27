import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Footer.scss";


const icons = [
    {
        id: 1,
        href: "mailto:v.georgakopoulos.dev@outlook.com",
        icon: faEnvelope,
    },
    {
        id: 2,
        href: "https://github.com/v-georgakopoulos",
        icon: faGithub,
    },
    {
        id: 3,
        href: "https://www.linkedin.com/in/vasilisgeorgakopoulos",
        icon: faLinkedin,
    },
];


const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
                <ul>
                    {icons.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                            >
                                <FontAwesomeIcon icon={item.icon} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <p>© 2025 v-georgakopoulos — All rights reserved</p>
        </footer>
    );
};

export default Footer;
