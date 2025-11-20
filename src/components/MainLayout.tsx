import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';

const MainLayout: React.FC = () => {
    return (
        <div id="main-scroll-container" style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
            height: '100vh',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth'
        }}>
            {/* Section 1: Meditations (Home) */}
            <div id="section-home" style={{
                minWidth: '100vw',
                height: '100vh',
                scrollSnapAlign: 'start',
                overflowY: 'hidden' // Home handles its own scroll
            }}>
                <Home />
            </div>

            {/* Section 2: About */}
            <div id="section-about" style={{
                minWidth: '100vw',
                height: '100vh',
                scrollSnapAlign: 'start',
                overflowY: 'auto',
                backgroundColor: 'var(--color-bg-primary)'
            }}>
                <About />
            </div>

            {/* Section 3: Projects */}
            <div id="section-projects" style={{
                minWidth: '100vw',
                height: '100vh',
                scrollSnapAlign: 'start',
                overflowY: 'auto',
                backgroundColor: 'var(--color-bg-primary)'
            }}>
                <Projects />
            </div>
        </div>
    );
};

export default MainLayout;
