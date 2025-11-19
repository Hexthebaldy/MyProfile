import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
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
    };

    const linkStyle: React.CSSProperties = {
        marginLeft: 'var(--space-6)',
        color: 'var(--color-text-secondary)',
        fontSize: 'var(--text-sm)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: 500,
    };

    return (
        <nav style={navStyle}>
            <div style={containerStyle}>
                <Link to="/" style={logoStyle}>DoJournal</Link>
                <div>
                    <Link to="/" style={linkStyle}>Meditations</Link>
                    <Link to="/about" style={linkStyle}>About</Link>
                    <Link to="/contact" style={linkStyle}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
