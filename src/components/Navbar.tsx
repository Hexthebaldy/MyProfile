import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
    activeSection?: 'home' | 'about' | 'projects';
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (sectionId: string) => {
        if (location.pathname === '/') {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { target: sectionId } });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">DoJournal</Link>
                <div className="navbar-links">
                    <button
                        onClick={() => handleNavigation('section-home')}
                        className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
                    >
                        Meditations
                    </button>
                    <button
                        onClick={() => handleNavigation('section-about')}
                        className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
                    >
                        About
                    </button>
                    <button
                        onClick={() => handleNavigation('section-projects')}
                        className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`}
                    >
                        Projects
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
