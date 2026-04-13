import { useState } from 'react';
import BuildingDoor from './components/BuildingDoor';
import NightSky from './components/NightSky';
import InvitationContent from './components/InvitationContent';
import { motion, AnimatePresence } from 'motion/react';

// Custom Red Building Icon inside a Heart Shape
const BuildingIcon = () => (
  <svg viewBox="0 0 40 40" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
    {/* Heart Shape Background & Outline */}
    <path d="M20 35.5l-2.4-2.2C9.1 25.6 3.5 20.5 3.5 14.2 3.5 9.1 7.5 5 12.6 5c2.9 0 5.7 1.4 7.4 3.5C21.7 6.4 24.5 5 27.4 5c5.1 0 9.1 4.1 9.1 9.2 0 6.3-5.6 11.4-14.1 19.1L20 35.5z" stroke="#b91c1c" strokeWidth="2" fill="rgba(15, 23, 42, 0.6)" className="backdrop-blur-md" />
    
    {/* Building Icon (Centered inside the heart) */}
    <g transform="translate(8, 4)">
      <path d="M4 10H20V22H4V10Z" fill="#b91c1c" />
      <path d="M8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10H8Z" fill="#f8fafc" />
      <rect x="6" y="12" width="2" height="10" fill="#f8fafc" opacity="0.5" />
      <rect x="10" y="12" width="2" height="10" fill="#f8fafc" opacity="0.5" />
      <rect x="14" y="12" width="2" height="10" fill="#f8fafc" opacity="0.5" />
      <rect x="18" y="12" width="2" height="10" fill="#f8fafc" opacity="0.5" />
      <path d="M10 16H14V22H10V16Z" fill="#0f172a" />
    </g>
  </svg>
);

export default function App() {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleDoorOpen = () => {
    setIsDoorOpen(true);
    // Delay showing content slightly for dramatic effect
    setTimeout(() => {
      setShowContent(true);
    }, 1000);
  };

  const handleGoHome = () => {
    setShowContent(false);
    setIsDoorOpen(false);
    // Scroll to top when going back to home
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden selection:bg-yellow-500/30">
      
      {/* Door is always mounted to allow reverse animation */}
      <BuildingDoor isOpen={isDoorOpen} onOpen={handleDoorOpen} />

      {/* Background is always there, revealed when door opens */}
      <NightSky />

      {/* Content fades in after door opens */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Home Button */}
            <motion.button
              onClick={handleGoHome}
              className="fixed top-6 right-6 z-50 hover:scale-110 transition-transform"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              title="Back to Entrance"
            >
              <BuildingIcon />
            </motion.button>
            
            <InvitationContent />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
