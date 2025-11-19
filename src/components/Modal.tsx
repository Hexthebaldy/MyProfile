import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
            padding: 'var(--space-4)',
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'var(--color-bg-primary)',
                width: '100%',
                maxWidth: '800px',
                maxHeight: '90vh',
                overflowY: 'auto',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-modal)',
                padding: 'var(--space-8)',
                position: 'relative',
            }} onClick={e => e.stopPropagation()}>
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: 'var(--space-4)',
                    right: 'var(--space-4)',
                    fontSize: 'var(--text-xl)',
                    color: 'var(--color-text-secondary)',
                    cursor: 'pointer',
                }}>
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
