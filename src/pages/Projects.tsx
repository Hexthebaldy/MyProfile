import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Photo Color Grading",
            description: "A professional-grade color grading tool for photographers. Apply cinematic LUTs and fine-tune HSL channels directly in the browser.",
            tags: ["Image Processing", "Canvas API", "React"],
            link: "http://localhost:3001"
        },
        {
            title: "Syntax Translator",
            description: "Real-time rendering and translation for Markdown, XML, and Mermaid diagrams. Perfect for documentation and technical writing.",
            tags: ["Parser", "Mermaid.js", "Markdown"],
            link: "http://localhost:3002"
        },
        {
            title: "Timestamp Calculator",
            description: "A developer utility for converting and calculating Unix timestamps across different timezones with precision.",
            tags: ["Utility", "Date-fns", "Tool"],
            link: "http://localhost:3003"
        }
    ];

    return (
        <div className="container" style={{ paddingTop: 'var(--space-16)', maxWidth: '1000px', minHeight: '80vh' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-12)', textAlign: 'center' }}
            >
                Open Source Tools
            </motion.h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
                {projects.map((project, index) => (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="glass-panel"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                            padding: 'var(--space-8)',
                            display: 'block',
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            willChange: 'transform'
                        }}
                        whileHover={{ y: -5, scale: 1.02 }}
                    >
                        <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>{project.title}</h3>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', lineHeight: 1.6 }}>
                            {project.description}
                        </p>
                        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    fontSize: 'var(--text-xs)',
                                    color: 'var(--color-text-accent)',
                                    background: 'rgba(0,0,0,0.03)',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
