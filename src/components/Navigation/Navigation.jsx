import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";


import "./Navigation.scss";


const tabs = [
    { id: 1, name: 'home', href: '#home' },
    { id: 2, name: 'about', href: '#about' },
    { id: 3, name: 'portfolio', href: '#portfolio' },
    { id: 4, name: 'contact', href: '#contact' },
]

const Navigation = () => {

    const [activeTab, setActiveTab] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }

    return (
        <div className="nav-wrapper">
            <div className="logo" onClick={toggleTheme}>
                <p>v-<span>georgakopoulos
                    {isDarkMode
                        ? <FontAwesomeIcon icon={faMoon} className="theme-icon" />
                        : <FontAwesomeIcon icon={faSun} className="theme-icon" />
                    }
                </span>
                </p>
            </div>
            <nav>

                <div className="mobile-nav">
                    <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>

                <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                    {
                        tabs.map(tab => (
                            <li key={tab.id}>
                                <a
                                    href={tab.href}
                                    className={activeTab === tab.name ? 'active' : ''}
                                    onClick={() => { setActiveTab(tab.name); setMenuOpen(false); }}
                                >
                                    {tab.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
