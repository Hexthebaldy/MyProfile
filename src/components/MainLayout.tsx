import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Navbar from './Navbar';

const MainLayout: React.FC = () => {
    const [activeSection, setActiveSection] = useState<'home' | 'about' | 'projects'>('home');
    const containerRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    // Handle navigation from other pages
    useEffect(() => {
        if (location.state && location.state.target) {
            const targetId = location.state.target;
            const element = document.getElementById(targetId);
            if (element) {
                // Small delay to ensure layout is ready
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
            // Clear state to prevent scrolling on subsequent renders (optional, but good practice)
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    // Intersection Observer for Active State
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.id === 'section-home') setActiveSection('home');
                        if (entry.target.id === 'section-about') setActiveSection('about');
                        if (entry.target.id === 'section-projects') setActiveSection('projects');
                    }
                });
            },
            {
                root: containerRef.current,
                threshold: 0.5 // Trigger when 50% of the section is visible
            }
        );

        const sections = ['section-home', 'section-about', 'section-projects'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar activeSection={activeSection} />
            <div id="main-scroll-container" ref={containerRef} style={{
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
        </>
    );
};

export default MainLayout;
