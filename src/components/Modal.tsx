import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    layoutId?: string | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, layoutId }) => {
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

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 2000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: 'none' // Allow clicks to pass through to backdrop
                }}>
                    {/* Backdrop - Removed blur for performance */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker to compensate for lack of blur
                            pointerEvents: 'auto',
                            willChange: 'opacity'
                        }}
                    />

                    {/* Modal Content Container - Morphs from Card */}
                    <motion.div
                        layoutId={layoutId || undefined}
                        style={{
                            backgroundColor: 'var(--color-bg-primary)',
                            borderRadius: '16px',
                            maxWidth: '800px',
                            width: '90%',
                            maxHeight: '85vh',
                            zIndex: 2001,
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)', // Reduced shadow complexity
                            position: 'relative',
                            pointerEvents: 'auto',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            willChange: 'transform, width, height, border-radius' // Hint browser
                        }}
                        transition={{
                            type: 'spring',
                            damping: 30,
                            stiffness: 300,
                            mass: 0.8
                        }}
                    >
                        {/* Scrollable Content Wrapper - Fades In */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }} // Slight delay to let morph start
                            style={{
                                padding: 'var(--space-12)',
                                overflowY: 'auto',
                                height: '100%',
                                width: '100%'
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: 'var(--space-4)',
                                    right: 'var(--space-4)',
                                    background: 'transparent',
                                    border: 'none',
                                    fontSize: 'var(--text-2xl)',
                                    cursor: 'pointer',
                                    color: 'var(--color-text-secondary)',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'background-color var(--transition-fast)',
                                    zIndex: 10
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            >
                                ×
                            </button>

                            {children}
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
