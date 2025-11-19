import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';

const Post: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = posts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="container" style={{ paddingTop: 'var(--space-16)', textAlign: 'center' }}>
                <h2>Post not found</h2>
                <Link to="/">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: 'var(--space-16)', maxWidth: '800px' }}>
            <article>
                <header style={{ marginBottom: 'var(--space-8)', textAlign: 'center' }}>
                    <span style={{ color: 'var(--color-text-accent)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {post.date} • {post.readTime}
                    </span>
                    <h1 style={{ fontSize: 'var(--text-4xl)', marginTop: 'var(--space-4)' }}>{post.title}</h1>
                </header>

                <div
                    style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)' }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--color-border)' }}>
                    <Link to="/">&larr; Back to All Posts</Link>
                </div>
            </article>
        </div>
    );
};

export default Post;
