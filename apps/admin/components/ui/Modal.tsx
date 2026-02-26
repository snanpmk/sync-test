'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Sync dialog open state with native showModal for proper top-layer and focus trap
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen && !dialog.open) {
            dialog.showModal();
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
            if (dialog?.open) dialog.close();
        };
    }, [isOpen]);

    // Handle the native Escape key press (cancel event)
    const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement>) => {
        e.preventDefault(); // Prevent native immediate close so we can animate out
        onClose();
    };

    // Handle clicking on the backdrop
    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        // Since dialog takes up full screen via showModal, clicking its extreme background is a backdrop click
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.dialog
                    ref={dialogRef}
                    onCancel={handleCancel}
                    onClick={handleBackdropClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="backdrop:bg-black/60 backdrop:backdrop-blur-sm bg-transparent shadow-none border-none p-0 overflow-visible open:flex items-center justify-center fixed inset-0 m-auto w-full max-w-lg z-50 text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                        className="relative w-full max-w-lg bg-white border border-neutral-200 rounded-[24px] md:rounded-[32px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col mx-4"
                    >
                        <div className="flex items-center justify-between p-5 md:p-8 border-b border-neutral-100 shrink-0">
                            <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-neutral-900">{title}</h3>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClose();
                                }}
                                className="p-2 text-neutral-400 hover:text-black hover:bg-neutral-50 rounded-xl transition-all outline-none focus-visible:ring-2 focus-visible:ring-black"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-5 md:p-8 overflow-y-auto scrollbar-hide text-left">
                            {children}
                        </div>
                    </motion.div>
                </motion.dialog>
            )}
        </AnimatePresence>
    );
}
