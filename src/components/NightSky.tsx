import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

// SVG Star shape
const StarIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" />
  </svg>
);

export default function NightSky() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);
  const { scrollY } = useScroll();
  
  // Scale effect to make background look like it's moving away (smooth)
  const rawScale = useTransform(scrollY, [0, 1000], [1, 0.85]);
  const bgScale = useSpring(rawScale, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    // Generate random stars (reduced count)
    const newStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 80, // Keep stars mostly in the upper sky
      size: Math.random() * 6 + 4, // Slightly larger to see the star shape
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 4, // Slower twinkling (increased duration)
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-orange-950 pointer-events-none">
      
      {/* Background Glow behind Moon */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] bg-orange-500/20 blur-[120px] rounded-full" />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 45, 90]
          }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
            delay: star.delay,
            ease: "easeInOut",
          }}
        >
          <StarIcon size={star.size} />
        </motion.div>
      ))}

      {/* Scalable Background Group (Moon + Mountain) */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale: bgScale, transformOrigin: 'bottom center' }}
      >
        {/* Massive Moon */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 rounded-full top-[18vh] w-[90vw] h-[90vw] md:top-[15vh] md:w-[70vw] md:h-[70vw] lg:top-[10vh] lg:w-[50vw] lg:h-[50vw] max-w-[700px] max-h-[700px]"
          style={{ 
            background: 'radial-gradient(circle at 35% 35%, #fef08a 0%, #f59e0b 40%, #ea580c 80%, #9a3412 100%)',
            boxShadow: '0 0 150px 40px rgba(245, 158, 11, 0.4), 0 0 80px 20px rgba(253, 230, 138, 0.6) inset'
          }}
        animate={{
          boxShadow: [
            '0 0 150px 40px rgba(245, 158, 11, 0.4), 0 0 80px 20px rgba(253, 230, 138, 0.6) inset',
            '0 0 180px 50px rgba(245, 158, 11, 0.5), 0 0 100px 25px rgba(253, 230, 138, 0.7) inset',
            '0 0 150px 40px rgba(245, 158, 11, 0.4), 0 0 80px 20px rgba(253, 230, 138, 0.6) inset'
          ]
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        {/* Moon Texture / Craters */}
        <div className="absolute top-[15%] left-[20%] w-[15%] h-[15%] rounded-full bg-orange-900/20 blur-md" />
        <div className="absolute top-[40%] right-[25%] w-[20%] h-[20%] rounded-full bg-orange-900/15 blur-lg" />
        <div className="absolute bottom-[25%] left-[30%] w-[25%] h-[20%] rounded-full bg-orange-900/20 blur-xl" />
        <div className="absolute top-[60%] left-[15%] w-[10%] h-[10%] rounded-full bg-orange-900/10 blur-sm" />
      </motion.div>

        {/* Realistic Moonlight-Illuminated Mountain */}
        <div 
          className="absolute bottom-0 w-[120%] -left-[10%] h-[55vh] min-h-[550px] sm:bottom-100 sm:w-[120%] sm:-left-[10%] sm:h-[80vh] sm:min-h-[700px] md:bottom-70 md:w-[500%] md:left-[200%] md:h-[60vh] md:min-h-[600px] lg:bottom-0 lg:w-[120%] lg:left-[-10%] lg:h-[40vh] lg:min-h-[570px]"
        >
          <svg 
          viewBox="0 0 1440 600" 
          className="absolute bottom-0 w-full h-full drop-shadow-[0_-10px_30px_rgba(0,0,0,0.5)]" 
          preserveAspectRatio="xMidYMin slice"
        >
          <defs>
            <radialGradient id="grad-back" cx="50%" cy="0%" r="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>
            
            {/* Main mountain body - darker, silhouetted against the bright moon */}
            <radialGradient id="grad-main" cx="50%" cy="-10%" r="110%">
              <stop offset="0%" stopColor="#334155" /> {/* Soft ambient light at peak */}
              <stop offset="25%" stopColor="#0f172a" /> {/* Quick fade to dark silhouette */}
              <stop offset="100%" stopColor="#020617" /> {/* Pitch black base */}
            </radialGradient>
            
            <linearGradient id="grad-front" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>

            {/* Rim light gradient to simulate the moon's glow catching the edges */}
            <linearGradient id="rim-light" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
              <stop offset="20%" stopColor="#fef08a" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#fef08a" stopOpacity="0" />
            </linearGradient>

            <filter id="moon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Distant background mountains (Sharp jagged peaks, smaller) */}
          <path 
            d="M0,600 L0,450 L80,480 L150,420 L250,470 L320,400 L450,480 L550,410 L650,460 L750,380 L850,450 L950,390 L1050,460 L1150,400 L1250,470 L1350,410 L1440,460 L1440,600 Z" 
            fill="url(#grad-back)" 
            opacity="0.5" 
          />

          {/* Main Broad Peak Base */}
          <path 
            d="M-100,600 L150,520 L300,450 L450,360 Q 550,300 620,220 Q 680,170 720,140 Q 760,180 820,240 Q 900,320 1050,400 L1300,500 L1500,600 Z" 
            fill="url(#grad-main)" 
          />

          {/* Realistic Moonlight Rim Light (Glowing edges catching the moon) */}
          <path 
            d="M300,450 L450,360 Q 550,300 620,220 Q 680,170 720,140 Q 760,180 820,240 Q 900,320 1050,400" 
            fill="none" 
            stroke="url(#rim-light)" 
            strokeWidth="4" 
            filter="url(#moon-glow)"
          />

          {/* Subtle internal ridges catching faint moonlight */}
          <path d="M720,140 Q 700,250 600,350" fill="none" stroke="url(#rim-light)" strokeWidth="2" opacity="0.6" filter="url(#moon-glow)"/>
          <path d="M720,140 Q 750,220 850,300" fill="none" stroke="url(#rim-light)" strokeWidth="1.5" opacity="0.4" filter="url(#moon-glow)"/>
          <path d="M620,220 Q 580,300 500,380" fill="none" stroke="url(#rim-light)" strokeWidth="1" opacity="0.3" filter="url(#moon-glow)"/>

          {/* Foreground Hills (Smooth rolling base) */}
          <path 
            d="M0,600 L0,500 Q 250,470 500,530 T 1000,490 T 1440,540 L1440,600 Z" 
            fill="url(#grad-front)" 
          />
        </svg>
        </div>
      </motion.div>
      
      {/* Fog/Mist at the bottom */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-black via-slate-950/80 to-transparent opacity-90" />
    </div>
  );
}
