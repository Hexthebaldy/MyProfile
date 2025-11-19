import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="container" style={{ paddingTop: 'var(--space-16)', maxWidth: '800px', minHeight: '60vh' }}>
            <h1 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-8)' }}>Contact</h1>
            <div className="glass-panel" style={{ padding: 'var(--space-8)' }}>
                <p style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)' }}>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div style={{ marginTop: 'var(--space-8)' }}>
                    <p style={{ marginBottom: 'var(--space-2)', fontWeight: 'bold' }}>Email me at:</p>
                    <a href="mailto:hello@example.com" style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text-accent)' }}>
                        hello@example.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
