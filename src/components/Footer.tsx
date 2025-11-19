import React from 'react';

const Footer: React.FC = () => {
    const footerStyle: React.CSSProperties = {
        padding: 'var(--space-8) 0',
        textAlign: 'center',
        borderTop: '1px solid var(--color-border)',
        marginTop: 'var(--space-16)',
        color: 'var(--color-text-secondary)',
        fontSize: 'var(--text-sm)',
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Midnight Gold. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
