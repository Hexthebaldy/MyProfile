import React from 'react';

interface SidebarProps {
    tags: string[];
    selectedTag: string | null;
    onSelectTag: (tag: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ tags, selectedTag, onSelectTag }) => {
    return (
        <aside className="sidebar">
            <h3 className="sidebar-title">
                Filter by Topic
            </h3>
            <ul className="sidebar-list">
                <li className="sidebar-item">
                    <button
                        onClick={() => onSelectTag(null)}
                        className={`sidebar-button ${selectedTag === null ? 'active' : ''}`}
                    >
                        All Posts
                    </button>
                </li>
                {tags.map(tag => (
                    <li key={tag} className="sidebar-item">
                        <button
                            onClick={() => onSelectTag(tag)}
                            className={`sidebar-button ${selectedTag === tag ? 'active' : ''}`}
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
