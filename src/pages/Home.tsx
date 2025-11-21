import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Avatar from '../components/Avatar';
import Sidebar from '../components/Sidebar';
import Modal from '../components/Modal';
import { fetchArticles, fetchArticleById, calculateReadTime, type Article, type ArticleDetail } from '../services/api';

interface DisplayPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    tags: string[];
}

const Home: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedPost, setSelectedPost] = useState<DisplayPost | null>(null);
    const [selectedLayoutId, setSelectedLayoutId] = useState<string | null>(null);
    const [loadingPost, setLoadingPost] = useState(false);

    // Load articles from API
    useEffect(() => {
        const loadArticles = async () => {
            try {
                setLoading(true);
                const data = await fetchArticles();
                setArticles(data);
                setError(null);
            } catch (err) {
                setError('Failed to load articles. Please try again later.');
                console.error('Error loading articles:', err);
            } finally {
                setLoading(false);
            }
        };

        loadArticles();
    }, []);

    // Convert API article to display format
    const articleToDisplayPost = (article: Article): DisplayPost => {
        return {
            id: String(article.id),
            title: article.title || '(Untitled)',
            excerpt: article.excerpt || '',
            content: '', // Will be loaded when clicked
            date: article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }) : '',
            readTime: '', // Will be calculated when full content is loaded
            tags: article.tags || []
        };
    };

    // Convert articles to display posts
    const posts = useMemo(() => {
        return articles.map(articleToDisplayPost);
    }, [articles]);

    // Get unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        articles.forEach(article => article.tags?.forEach(tag => tags.add(tag)));
        return Array.from(tags);
    }, [articles]);

    // Filter posts
    const filteredPosts = useMemo(() => {
        if (!selectedTag) return posts;
        return posts.filter(post => post.tags?.includes(selectedTag));
    }, [selectedTag, posts]);

    // Recent posts (first 3)
    const recentPosts = posts.slice(0, 3);

    // Load full article content when a post is clicked
    const handlePostClick = async (post: DisplayPost, layoutId: string) => {
        setSelectedLayoutId(layoutId);
        setLoadingPost(true);

        try {
            const fullArticle = await fetchArticleById(parseInt(post.id));
            const fullPost: DisplayPost = {
                ...post,
                content: fullArticle.content,
                readTime: calculateReadTime(fullArticle.content)
            };
            setSelectedPost(fullPost);
        } catch (err) {
            console.error('Error loading article:', err);
            // Still show the post with available data
            setSelectedPost(post);
        } finally {
            setLoadingPost(false);
        }
    };

    // Loading state
    if (loading) {
        return (
            <div style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 'var(--space-4)'
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    border: '3px solid var(--color-border)',
                    borderTop: '3px solid var(--color-text-accent)',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }} />
                <p style={{ color: 'var(--color-text-secondary)' }}>Loading articles...</p>
                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 'var(--space-4)',
                padding: 'var(--space-6)'
            }}>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-lg)', textAlign: 'center' }}>
                    {error}
                </p>
                <button
                    onClick={() => window.location.reload()}
                    style={{
                        padding: 'var(--space-3) var(--space-6)',
                        background: 'var(--color-text-primary)',
                        color: 'var(--color-bg-primary)',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: 'var(--text-sm)'
                    }}
                >
                    Retry
                </button>
            </div>
        );
    }

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
                            onClick={() => handlePostClick(post, `recent-${post.id}`)}
                            className="glass-panel"
                            style={{
                                cursor: 'pointer',
                                padding: 'var(--space-6)',
                                textAlign: 'left',
                                backgroundColor: 'var(--color-bg-primary)',
                                borderRadius: '12px',
                                willChange: 'transform'
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
                                {post.excerpt.substring(0, 80)}{post.excerpt.length > 80 ? '...' : ''}
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
                height: '100vh',
                scrollSnapAlign: 'start',
                paddingTop: 'var(--space-8)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{
                            textAlign: 'center',
                            fontSize: 'var(--text-xl)',
                            marginBottom: 'var(--space-8)',
                            marginTop: 'var(--space-4)',
                            color: 'var(--color-text-primary)',
                            flexShrink: 0
                        }}
                    >
                        Library
                    </motion.h2>
                    <div className="library-container">
                        {/* Sidebar */}
                        <motion.div
                            className="sidebar-container"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            <Sidebar tags={allTags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
                        </motion.div>

                        {/* Grid - Scrollable */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            style={{ flex: 1, overflowY: 'auto', paddingBottom: 'var(--space-24)', paddingRight: 'var(--space-2)' }}
                        >
                            <div className="library-grid">
                                {filteredPosts.map(post => (
                                    <motion.div key={post.id}
                                        layoutId={`library-${post.id}`}
                                        className="glass-panel"
                                        onClick={() => handlePostClick(post, `library-${post.id}`)}
                                        style={{
                                            padding: 'var(--space-6)',
                                            cursor: 'pointer',
                                            boxShadow: 'var(--shadow-sm)',
                                            backgroundColor: 'var(--color-bg-primary)',
                                            borderRadius: '12px',
                                            willChange: 'transform'
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
                        </motion.div>
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
                                {selectedPost.date}{selectedPost.readTime && ` • ${selectedPost.readTime}`}
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
                        {loadingPost ? (
                            <div style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
                                <p style={{ color: 'var(--color-text-secondary)' }}>Loading content...</p>
                            </div>
                        ) : (
                            <div
                                style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-primary)', lineHeight: 1.8 }}
                                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                            />
                        )}
                    </article>
                )}
            </Modal>
        </div>
    );
};

export default Home;
