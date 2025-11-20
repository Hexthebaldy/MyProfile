import React, { useState, useMemo } from 'react';
import { posts, type Post } from '../data/posts';
import { motion } from 'framer-motion';
import Avatar from '../components/Avatar';
import Sidebar from '../components/Sidebar';
import Modal from '../components/Modal';

const Home: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [selectedLayoutId, setSelectedLayoutId] = useState<string | null>(null);

    // Get unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        posts.forEach(post => post.tags?.forEach(tag => tags.add(tag)));
        return Array.from(tags);
    }, []);

    // Filter posts
    const filteredPosts = useMemo(() => {
        if (!selectedTag) return posts;
        return posts.filter(post => post.tags?.includes(selectedTag));
    }, [selectedTag]);

    // Recent posts (first 3)
    const recentPosts = posts.slice(0, 3);

    return (
        <div style={{ height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory' }}>
            {/* Viewport 1: Hero + Recent Posts */}
            <section style={{
                height: '100vh',
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                padding: 'var(--space-16) var(--space-6)',
                boxSizing: 'border-box'
            }}>
                <div style={{ marginBottom: 'var(--space-12)', textAlign: 'center' }}>
                    <Avatar />
                    <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', fontStyle: 'italic', marginTop: 'var(--space-4)' }}>
                        "Simplicity is the ultimate sophistication."
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'var(--space-6)',
                    width: '100%',
                    maxWidth: '1200px'
                }}>
                    {recentPosts.map(post => (
                        <motion.article key={post.id}
                            layoutId={`recent-${post.id}`}
                            onClick={() => {
                                setSelectedPost(post);
                                setSelectedLayoutId(`recent-${post.id}`);
                            }}
                            className="glass-panel"
                            style={{
                                cursor: 'pointer',
                                padding: 'var(--space-6)',
                                textAlign: 'left',
                                backgroundColor: 'var(--color-bg-primary)', // Match modal bg
                                borderRadius: '12px', // Explicit border radius
                                willChange: 'transform' // Optimize animation
                            }}
                            whileHover={{
                                scale: 1.02,
                                y: -4,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-accent)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: 'var(--space-2)' }}>
                                {post.date}
                            </span>
                            <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>{post.title}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                                {post.excerpt.substring(0, 80)}...
                            </p>
                        </motion.article>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: 'var(--space-8)',
                    animation: 'bounce 2s infinite',
                    color: 'var(--color-text-secondary)',
                    fontSize: 'var(--text-sm)',
                    cursor: 'pointer'
                }} onClick={() => document.getElementById('library-section')?.scrollIntoView({ behavior: 'smooth' })}>
                    ↓ Scroll to Library
                </div>
                <style>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-10px);}
            60% {transform: translateY(-5px);}
          }
        `}</style>
            </section>

            {/* Viewport 2: Library Section */}
            <section id="library-section" style={{
                minHeight: '100vh',
                scrollSnapAlign: 'start',
                paddingTop: 'var(--space-16)',
                paddingBottom: 'var(--space-16)',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className="container" style={{ flex: 1 }}>
                    <h2 style={{
                        textAlign: 'center',
                        fontSize: 'var(--text-xl)',
                        marginBottom: 'var(--space-12)',
                        color: 'var(--color-text-primary)'
                    }}>
                        Library
                    </h2>
                    <div style={{ display: 'flex', gap: 'var(--space-12)', flexDirection: 'row', flexWrap: 'wrap', height: '100%' }}>
                        {/* Sidebar */}
                        <div style={{ flex: '0 0 200px' }}>
                            <Sidebar tags={allTags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
                        </div>

                        {/* Grid */}
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
                                {filteredPosts.map(post => (
                                    <motion.div key={post.id}
                                        layoutId={`library-${post.id}`}
                                        className="glass-panel"
                                        onClick={() => {
                                            setSelectedPost(post);
                                            setSelectedLayoutId(`library-${post.id}`);
                                        }}
                                        style={{
                                            padding: 'var(--space-6)',
                                            cursor: 'pointer',
                                            boxShadow: 'var(--shadow-sm)',
                                            backgroundColor: 'var(--color-bg-primary)', // Match modal bg
                                            borderRadius: '12px',
                                            willChange: 'transform' // Optimize animation
                                        }}
                                        whileHover={{
                                            scale: 1.02,
                                            y: -4,
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>{post.title}</h4>
                                        <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                                            {post.tags?.map(tag => (
                                                <span key={tag} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-accent)', background: 'rgba(0,0,0,0.03)', padding: '2px 6px', borderRadius: '4px' }}>
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                            {post.excerpt}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Post Modal */}
            <Modal
                isOpen={!!selectedPost}
                onClose={() => setSelectedPost(null)}
                layoutId={selectedLayoutId}
            >
                {selectedPost && (
                    <article>
                        <header style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {selectedPost.date} • {selectedPost.readTime}
                            </span>
                            <h1 style={{ fontSize: 'var(--text-3xl)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                                {selectedPost.title}
                            </h1>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-2)' }}>
                                {selectedPost.tags?.map(tag => (
                                    <span key={tag} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)', padding: '2px 8px', borderRadius: '12px' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </header>
                        <div
                            style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-primary)', lineHeight: 1.8 }}
                            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                        />
                    </article>
                )}
            </Modal>
        </div>
    );
};

export default Home;
