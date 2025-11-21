import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <div className="container" style={{ paddingTop: 'var(--space-16)', maxWidth: '800px', minHeight: '60vh' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <h1 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-8)' }}>About Me</h1>
                <div className="glass-panel" style={{ padding: 'var(--space-8)' }}>
                    <p style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)' }}>
                        Hello! I'm wojack, a developer and designer passionate about creating beautiful, functional digital experiences.
                    </p>
                    <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)' }}>
                        This blog is a collection of my thoughts on technology, design, and the intersection of the two. I believe in the power of minimalism, the elegance of simplicity, and the importance of user experience.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
