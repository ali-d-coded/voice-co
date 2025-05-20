import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  closeOnBackdropClick?: boolean;
};

export default function Modal({
  open,
  onClose,
  children,
  closeOnBackdropClick = true,
}: ModalProps) {
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (open && event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    // Lock body scroll when modal is open
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  // Stop propagation on modal content to prevent closing when clicking inside
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!open) return null;

  return (
    // Backdrop
    <div 
      onClick={closeOnBackdropClick ? onClose : undefined} 
      className={cn(
        'fixed inset-0 flex justify-center items-center z-50 transition-opacity w-full ', 
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Modal content */}
      <div 
        onClick={handleContentClick}
        className={cn(
          'relative z-10 transition-all duration-300',
          open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        )}
      >
        {children}
      </div>
    </div>
  );
}