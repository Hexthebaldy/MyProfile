import React from 'react';

interface SidebarProps {
    tags: string[];
    selectedTag: string | null;
    onSelectTag: (tag: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ tags, selectedTag, onSelectTag }) => {
    return (
        <aside style={{ minWidth: '200px' }}>
            <h3 style={{
                fontSize: 'var(--text-sm)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-text-secondary)'
            }}>
                Filter by Topic
            </h3>
            <ul style={{
                listStyle: 'none',
                borderRight: '1px solid var(--color-border)',
                paddingRight: 'var(--space-4)'
            }}>
                <li style={{ marginBottom: 'var(--space-2)' }}>
                    <button
                        onClick={() => onSelectTag(null)}
                        style={{
                            color: selectedTag === null ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                            fontWeight: selectedTag === null ? 'bold' : 'normal',
                            fontSize: 'var(--text-sm)',
                            textAlign: 'left',
                            width: '100%',
                        }}
                    >
                        All Posts
                    </button>
                </li>
                {tags.map(tag => (
                    <li key={tag} style={{ marginBottom: 'var(--space-2)' }}>
                        <button
                            onClick={() => onSelectTag(tag)}
                            style={{
                                color: selectedTag === tag ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                fontWeight: selectedTag === tag ? 'bold' : 'normal',
                                fontSize: 'var(--text-sm)',
                                textAlign: 'left',
                                width: '100%',
                            }}
                        >
                            {tag}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
