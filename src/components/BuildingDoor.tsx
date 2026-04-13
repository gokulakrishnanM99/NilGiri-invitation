import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const BuildingSVG = () => (
  <svg viewBox="0 0 1000 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMax slice">
    {/* Sky Background */}
    <rect width="100%" height="100%" fill="#7dd3fc" /> {/* sky-300 */}
    
    {/* Clouds */}
    <path d="M 100 150 Q 150 100 200 150 Q 250 120 300 160 Q 250 200 150 180 Z" fill="#ffffff" opacity="0.8" />
    <path d="M 700 120 Q 750 80 800 130 Q 850 100 900 140 Q 850 180 750 160 Z" fill="#ffffff" opacity="0.7" />

    {/* Ground */}
    <rect y="450" width="100%" height="150" fill="#166534" /> {/* green-800 */}
    <path d="M 0 450 Q 250 430 500 450 T 1000 450 L 1000 600 L 0 600 Z" fill="#15803d" /> {/* green-700 */}

    {/* Main Building Body (Red Brick) */}
    <rect x="150" y="250" width="700" height="200" fill="#b91c1c" /> {/* red-700 */}
    
    {/* White Stripes */}
    <rect x="150" y="280" width="700" height="8" fill="#f8fafc" />
    <rect x="150" y="320" width="700" height="8" fill="#f8fafc" />
    <rect x="150" y="360" width="700" height="8" fill="#f8fafc" />
    <rect x="150" y="400" width="700" height="8" fill="#f8fafc" />

    {/* Side Wings Details */}
    <rect x="200" y="270" width="40" height="60" fill="#7f1d1d" rx="20" />
    <rect x="280" y="270" width="40" height="60" fill="#7f1d1d" rx="20" />
    <rect x="680" y="270" width="40" height="60" fill="#7f1d1d" rx="20" />
    <rect x="760" y="270" width="40" height="60" fill="#7f1d1d" rx="20" />

    {/* Central Tower */}
    <rect x="400" y="120" width="200" height="130" fill="#b91c1c" />
    <rect x="400" y="150" width="200" height="8" fill="#f8fafc" />
    <rect x="400" y="190" width="200" height="8" fill="#f8fafc" />
    <rect x="400" y="230" width="200" height="8" fill="#f8fafc" />

    {/* Dome Base */}
    <rect x="380" y="110" width="240" height="10" fill="#f8fafc" />
    {/* Dome */}
    <path d="M 400 110 A 100 100 0 0 1 600 110 Z" fill="#f1f5f9" /> {/* slate-100 */}
    
    {/* Clock */}
    <circle cx="500" cy="180" r="25" fill="#ffffff" stroke="#334155" strokeWidth="4" />
    <line x1="500" y1="180" x2="500" y2="165" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
    <line x1="500" y1="180" x2="512" y2="180" stroke="#334155" strokeWidth="3" strokeLinecap="round" />

    {/* Central Archway Structure */}
    <rect x="380" y="250" width="240" height="200" fill="#991b1b" /> {/* darker red */}
    <rect x="380" y="280" width="240" height="8" fill="#f8fafc" />
    <rect x="380" y="320" width="240" height="8" fill="#f8fafc" />
    <rect x="380" y="360" width="240" height="8" fill="#f8fafc" />
    <rect x="380" y="400" width="240" height="8" fill="#f8fafc" />

    {/* The Arch/Doorway */}
    <path d="M 420 450 L 420 350 A 80 80 0 0 1 580 350 L 580 450 Z" fill="#0f172a" /> {/* dark entrance */}
    
    {/* Text Sign */}
    <rect x="390" y="255" width="220" height="20" fill="#f8fafc" rx="4" />
    <text x="500" y="270" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#0f172a" textAnchor="middle">COLLEGE OF ENGINEERING GUINDY</text>

    {/* Trees/Landscaping */}
    <circle cx="150" cy="400" r="70" fill="#064e3b" /> {/* emerald-900 */}
    <circle cx="220" cy="430" r="50" fill="#065f46" />
    <circle cx="850" cy="400" r="70" fill="#064e3b" />
    <circle cx="780" cy="430" r="50" fill="#065f46" />
    
    {/* Front bushes */}
    <circle cx="350" cy="460" r="30" fill="#047857" />
    <circle cx="650" cy="460" r="30" fill="#047857" />
  </svg>
);

export default function BuildingDoor({ isOpen, onOpen }: { isOpen: boolean; onOpen: () => void }) {
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setShowPrompt(false);
    } else {
      // Show prompt again slightly after closing
      const timer = setTimeout(() => setShowPrompt(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleOpen = () => {
    if (isOpen) return;
    onOpen();
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex overflow-hidden cursor-pointer ${isOpen ? 'pointer-events-none' : 'pointer-events-auto'}`} 
      onClick={handleOpen}
      style={{ perspective: '1500px' }}
    >
      {/* Left Door Panel */}
      <motion.div
        className="w-1/2 h-full relative overflow-hidden shadow-[10px_0_30px_rgba(0,0,0,0.5)] z-10 origin-left"
        initial={{ rotateY: 0, opacity: 1 }}
        animate={{ 
          rotateY: isOpen ? -105 : 0,
          opacity: isOpen ? 0 : 1 
        }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute top-0 left-0 w-[100vw] h-full pointer-events-none">
          <BuildingSVG />
        </div>
      </motion.div>

      {/* Right Door Panel */}
      <motion.div
        className="w-1/2 h-full relative overflow-hidden shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-10 origin-right"
        initial={{ rotateY: 0, opacity: 1 }}
        animate={{ 
          rotateY: isOpen ? 105 : 0,
          opacity: isOpen ? 0 : 1 
        }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute top-0 right-0 w-[100vw] h-full pointer-events-none">
          <BuildingSVG />
        </div>
      </motion.div>

      {/* Click Prompt */}
      {showPrompt && (
        <motion.div 
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div 
            className="bg-black/50 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 text-white font-serif tracking-widest text-lg"
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            Click to Enter
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
