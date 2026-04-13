import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const starsData = [
  { x: 50, y: 150, s: 0.15, o: 0.4 }, { x: 100, y: 30, s: 0.2, o: 0.7 },
  { x: 150, y: 80, s: 0.25, o: 0.8 }, { x: 200, y: 120, s: 0.1, o: 0.5 },
  { x: 250, y: 60, s: 0.15, o: 0.8 }, { x: 300, y: 40, s: 0.15, o: 0.5 },
  { x: 350, y: 80, s: 0.25, o: 0.8 }, { x: 400, y: 30, s: 0.1, o: 0.6 },
  { x: 450, y: 100, s: 0.3, o: 0.9 }, { x: 500, y: 110, s: 0.2, o: 0.7 },
  { x: 550, y: 40, s: 0.15, o: 0.6 }, { x: 600, y: 130, s: 0.2, o: 0.9 },
  { x: 650, y: 70, s: 0.25, o: 0.8 }, { x: 700, y: 60, s: 0.25, o: 0.7 },
  { x: 750, y: 30, s: 0.1, o: 0.4 }, { x: 800, y: 150, s: 0.2, o: 0.7 },
  { x: 850, y: 110, s: 0.15, o: 0.6 }, { x: 880, y: 40, s: 0.15, o: 0.5 },
  { x: 900, y: 90, s: 0.15, o: 0.5 }, { x: 950, y: 50, s: 0.25, o: 0.8 },
  { x: 80, y: 100, s: 0.1, o: 0.6 }, { x: 180, y: 40, s: 0.15, o: 0.7 },
  { x: 380, y: 140, s: 0.2, o: 0.5 }, { x: 480, y: 60, s: 0.1, o: 0.8 },
  { x: 580, y: 90, s: 0.15, o: 0.6 }, { x: 720, y: 120, s: 0.2, o: 0.9 },
  { x: 820, y: 70, s: 0.1, o: 0.5 }, { x: 920, y: 130, s: 0.15, o: 0.7 },
];

const BuildingSVG = ({ showPrompt }: { showPrompt?: boolean }) => (
  <svg viewBox="0 0 1000 600" className="w-full h-full object-cover" preserveAspectRatio="xMidYMax slice">
    <defs>
      <path id="star" d="M5 0 L6.12 3.45 L9.75 3.45 L6.81 5.59 L7.93 9.04 L5 6.91 L2.07 9.04 L3.19 5.59 L0.25 3.45 L3.88 3.45 Z" fill="#ffffff" />
    </defs>
    {/* Night Sky Background */}
    <rect width="100%" height="100%" fill="#0f172a" /> {/* slate-900 */}
    
    {/* Stars */}
    {starsData.map((star, i) => (
      <use key={i} href="#star" transform={`translate(${star.x}, ${star.y}) scale(${star.s})`} opacity={star.o} />
    ))}
    
    {/* Clouds (Dimmed for night) */}
    <path d="M 100 150 Q 150 100 200 150 Q 250 120 300 160 Q 250 200 150 180 Z" fill="#334155" opacity="0.5" />
    <path d="M 700 120 Q 750 80 800 130 Q 850 100 900 140 Q 850 180 750 160 Z" fill="#334155" opacity="0.4" />

    {/* Building and Ground Group - Translates down on PC */}
    <g 
      className="translate-y-[60px] sm:translate-y-[80px] md:translate-y-[100px] lg:translate-y-[120px] scale-[0.95] transition-transform duration-700 ease-in-out"
      style={{ transformOrigin: '500px 600px' }}
    >
      {/* Ground */}
      <rect y="450" width="100%" height="300" fill="#166534" /> {/* green-800 */}
      <path d="M 0 450 Q 250 430 500 450 T 1000 450 L 1000 800 L 0 800 Z" fill="#15803d" /> {/* green-700 */}

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
      
      {/* Click Prompt inside the door */}
      {showPrompt && (
        <foreignObject x="420" y="370" width="160" height="60">
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.div 
                className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white font-serif tracking-widest text-[10px] sm:text-[11px] uppercase whitespace-nowrap"
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                Click to Enter
              </motion.div>
            </motion.div>
          </div>
        </foreignObject>
      )}

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
    </g>
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
          <BuildingSVG showPrompt={showPrompt} />
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
          <BuildingSVG showPrompt={showPrompt} />
        </div>
      </motion.div>
    </div>
  );
}
