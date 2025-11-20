import React from 'react';
import avatarImage from '../assets/image.png';

const Avatar: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#e0e0e0',
                margin: '0 auto var(--space-4)',
                backgroundImage: `url(${avatarImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'var(--shadow-md)',
            }} />
            <h1 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>Yang Wenhao</h1>
            <p style={{
                fontFamily: 'var(--font-signature)',
                fontSize: 'var(--text-2xl)',
                color: 'var(--color-text-accent)',
                opacity: 0.8
            }}>
                Developer & Designer
            </p>
        </div>
    );
};

export default Avatar;
