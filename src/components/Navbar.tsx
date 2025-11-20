import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
    activeSection?: 'home' | 'about' | 'projects';
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const navStyle: React.CSSProperties = {
        padding: 'var(--space-6) 0',
        background: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 var(--space-6)',
    };

    const logoStyle: React.CSSProperties = {
        fontFamily: 'var(--font-signature)',
        fontSize: 'var(--text-xl)',
        color: 'var(--color-text-primary)',
        fontWeight: 'bold',
        textDecoration: 'none'
    };

    const getLinkStyle = (section: string): React.CSSProperties => ({
        marginLeft: 'var(--space-6)',
        color: activeSection === section ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
        fontSize: 'var(--text-sm)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: activeSection === section ? 700 : 500,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        transition: 'color 0.3s ease, font-weight 0.3s ease',
        borderBottom: activeSection === section ? '2px solid var(--color-text-accent)' : '2px solid transparent',
        paddingBottom: '4px'
    });

    const handleNavigation = (sectionId: string) => {
        if (location.pathname === '/') {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { target: sectionId } });
        }
    };

    return (
        <nav style={navStyle}>
            <div style={containerStyle}>
                <Link to="/" style={logoStyle}>DoJournal</Link>
                <div>
                    <button onClick={() => handleNavigation('section-home')} style={getLinkStyle('home')}>Meditations</button>
                    <button onClick={() => handleNavigation('section-about')} style={getLinkStyle('about')}>About</button>
                    <button onClick={() => handleNavigation('section-projects')} style={getLinkStyle('projects')}>Projects</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
