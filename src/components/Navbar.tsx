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
                    <button onClick={() => document.getElementById('section-home')?.scrollIntoView({ behavior: 'smooth' })} style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer' }}>Meditations</button>
                    <button onClick={() => document.getElementById('section-about')?.scrollIntoView({ behavior: 'smooth' })} style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer' }}>About</button>
                    <button onClick={() => document.getElementById('section-projects')?.scrollIntoView({ behavior: 'smooth' })} style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer' }}>Projects</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
