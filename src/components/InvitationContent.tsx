import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function InvitationContent() {
  return (
    <div className="relative z-10 min-h-[105vh] lg:min-h-[170vh] flex flex-col items-center pt-[8vh] pb-48 px-4">
      <motion.div 
        className="max-w-4xl w-full text-center space-y-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {/* Header / Invite Text (Moved up above the moon, color balanced for dark sky) */}
        <div className="space-y-2 mb-12">
          <motion.h2 
            className="text-amber-100/90 font-serif tracking-[0.2em] text-sm md:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Together with our families
          </motion.h2>
          <motion.p 
            className="text-amber-50/90 font-medium italic text-lg md:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            We invite you to celebrate the wedding reception of
          </motion.p>
        </div>

        {/* Names (White, Bigger, Gap Adjusted) */}
        <div className="py-4 flex flex-col items-center justify-center space-y-2 md:space-y-4 w-full">
          <motion.h1 
            className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white text-center w-full [text-shadow:0_4px_16px_rgba(0,0,0,0.6),0_1px_3px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
          >
            Giriprasath
          </motion.h1>
          <motion.span 
            className="font-display text-4xl sm:text-5xl md:text-7xl text-yellow-400 z-10 [text-shadow:0_4px_16px_rgba(0,0,0,0.6),0_1px_3px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            &
          </motion.span>
          <motion.h1 
            className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white text-center w-full [text-shadow:0_4px_16px_rgba(0,0,0,0.6),0_1px_3px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 1.5, ease: "easeOut" }}
          >
            Nilapriya
          </motion.h1>
        </div>

        {/* Romantic Quote */}
        <motion.div
          className="py-6 px-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 1 }}
        >
          <p className="font-serif italic text-xl md:text-2xl text-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed font-medium">
            Beneath the calm mountains and the glowing moon, our story began
          </p>
        </motion.div>

        {/* Details (More Glossy Effect Containers) */}
        <motion.div 
          className="pt-6 flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 1 }}
        >
          {/* Date and Time Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center w-full max-w-2xl">
            {/* Date Pill */}
            <div className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-black/20 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.3)]">
              <Calendar className="w-5 h-5 text-orange-700" />
              <span className="text-lg md:text-xl text-white font-light tracking-wide drop-shadow-md">19 April 2026</span>
            </div>
            {/* Time Pill */}
            <div className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-black/20 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.3)]">
              <Clock className="w-5 h-5 text-orange-700" />
              <span className="text-lg md:text-xl text-white font-light tracking-wide drop-shadow-md">6:00 PM Onwards</span>
            </div>
          </div>
          
          {/* Venue Pill (Clickable Link) */}
          <a 
            href="https://maps.app.goo.gl/TnMLYVawFTKqVCCa6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-black/20 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.3)] w-full max-w-2xl hover:bg-black/30 transition-colors cursor-pointer group"
          >
            <MapPin className="w-5 h-5 text-orange-700 group-hover:scale-110 transition-transform" />
            <span className="text-lg md:text-xl text-white font-light tracking-wide drop-shadow-md group-hover:text-orange-100 transition-colors">S. K. Devar Mahal, Sattur</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
