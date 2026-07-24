import React, { useMemo } from 'react';
import { motion } from 'framer-motion';



export const FallingPetals = () => {
  const [count, setCount] = React.useState(10);

  React.useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setCount(isMobile ? 8 : 16);
  }, []);

  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 10 + 10, 
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 8,
      rotation: Math.random() * 360,
      type: Math.floor(Math.random() * 3), // 0: Rose, 1: Gold leaf, 2: Marigold
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {petals.map((p) => {
        const isRose = p.type === 0;
        const isGold = p.type === 1;
        const isMarigold = p.type === 2;
        
        return (
          <motion.div
            key={p.id}
            className={`absolute transform-gpu ${isRose ? 'text-maroon/70' : isGold ? 'text-gold/60' : 'text-[#E2B75A]/80'}`}
            style={{
              left: `${p.x}%`,
              top: `-30px`,
              width: p.size,
              height: p.size,
              willChange: "transform",
            }}
            initial={{ y: -30, rotate: p.rotation }}
            animate={{
              y: ['0vh', '105vh'],
              rotate: p.rotation + 360,
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          >
            {isRose && (
              <svg viewBox="0 0 24 24" className="w-full h-full" style={{ transform: 'rotate(-45deg)' }}>
                <path d="M12 2 C 20 8 20 18 12 22 C 4 18 4 8 12 2 Z" fill="currentColor" opacity="0.9" />
              </svg>
            )}
            {isGold && (
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M12 2 C 16 8 16 16 12 22 C 8 16 8 8 12 2 Z" fill="currentColor" opacity="0.8" />
              </svg>
            )}
            {isMarigold && (
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M2 20 C 2 10 12 2 22 2 C 22 12 12 20 2 20 Z" fill="currentColor" opacity="0.9" />
              </svg>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export const RotatingMandala = ({ className }: { className?: string }) => {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={`text-gold ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {/* Outer petal ring */}
      <path d="M50 5 Q60 15, 50 25 Q40 15, 50 5 Z" fill="currentColor" opacity="0.2" transform="rotate(0 50 50)" />
      <path d="M50 5 Q60 15, 50 25 Q40 15, 50 5 Z" fill="currentColor" opacity="0.2" transform="rotate(45 50 50)" />
      <path d="M50 5 Q60 15, 50 25 Q40 15, 50 5 Z" fill="currentColor" opacity="0.2" transform="rotate(90 50 50)" />
      <path d="M50 5 Q60 15, 50 25 Q40 15, 50 5 Z" fill="currentColor" opacity="0.2" transform="rotate(135 50 50)" />
      <path d="M50 5 Q60 15, 50 25 Q40 15, 50 5 Z" fill="currentColor" opacity="0.2" transform="rotate(180 50 50)" />
      <path d="M50 5 Q60 15, 50 25 Q40 15, 50 5 Z" fill="currentColor" opacity="0.2" transform="rotate(225 50 50)" />
      <path d="M50 5 Q60 15, 50 25 Q40 15, 50 5 Z" fill="currentColor" opacity="0.2" transform="rotate(270 50 50)" />
      <path d="M50 5 Q60 15, 50 25 Q40 15, 50 5 Z" fill="currentColor" opacity="0.2" transform="rotate(315 50 50)" />
      
      {/* Inner star */}
      <path d="M50 25 L55 45 L75 50 L55 55 L50 75 L45 55 L25 50 L45 45 Z" fill="currentColor" opacity="0.4" />
      <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.6" />
    </motion.svg>
  );
};

export const HangingLotusBells = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
      <motion.div 
        className="absolute top-0 left-[8%] sm:left-[15%] md:left-[20%] w-12 sm:w-16 origin-top opacity-90 drop-shadow-lg"
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 400" className="w-full h-auto overflow-visible">
          {/* Vertical Chain */}
          <line x1="50" y1="0" x2="50" y2="350" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 2" />
          
          {/* Top Lotus */}
          <g transform="translate(50, 80)">
            <path d="M0,0 C-20,0 -25,20 0,25 C25,20 20,0 0,0 Z" fill="#6B8E6B" opacity="0.9" />
            <path d="M0,15 C-15,5 -10,-25 0,-35 C10,-25 15,5 0,15 Z" fill="#E6A8B6" />
            <path d="M0,15 C-5,5 -5,-25 0,-35 C5,-25 5,5 0,15 Z" fill="#D68A9C" />
            <circle cx="0" cy="15" r="3" fill="#D4AF37" />
          </g>

          {/* Middle Lotus */}
          <g transform="translate(50, 180)">
            <path d="M0,0 C-20,0 -25,20 0,25 C25,20 20,0 0,0 Z" fill="#6B8E6B" opacity="0.9" />
            <path d="M0,15 C-15,5 -10,-25 0,-35 C10,-25 15,5 0,15 Z" fill="#E6A8B6" />
            <path d="M0,15 C-5,5 -5,-25 0,-35 C5,-25 5,5 0,15 Z" fill="#D68A9C" />
            <circle cx="0" cy="15" r="3" fill="#D4AF37" />
          </g>
          
          {/* Bottom Lotus */}
          <g transform="translate(50, 280)">
            <path d="M0,0 C-20,0 -25,20 0,25 C25,20 20,0 0,0 Z" fill="#6B8E6B" opacity="0.9" />
            <path d="M0,15 C-15,5 -10,-25 0,-35 C10,-25 15,5 0,15 Z" fill="#E6A8B6" />
            <path d="M0,15 C-5,5 -5,-25 0,-35 C5,-25 5,5 0,15 Z" fill="#D68A9C" />
            <circle cx="0" cy="15" r="3" fill="#D4AF37" />
          </g>

          {/* Bell */}
          <g transform="translate(50, 360)">
            <path d="M-15,10 C-15,-15 15,-15 15,10 L22,25 L-22,25 Z" fill="url(#goldGrad)" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }} />
            <path d="M-10,-2 C0,-10 10,-2 10,-2" fill="none" stroke="#B0852A" strokeWidth="1.5" />
            <circle cx="0" cy="28" r="4" fill="#D4AF37" />
            <circle cx="0" cy="-5" r="3" fill="#D4AF37" />
          </g>
          
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B0852A" />
              <stop offset="50%" stopColor="#FDF5D3" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div 
        className="absolute top-0 right-[8%] sm:right-[15%] md:right-[20%] w-12 sm:w-16 origin-top opacity-90 drop-shadow-lg"
        animate={{ rotate: [4, -4, 4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg viewBox="0 0 100 400" className="w-full h-auto overflow-visible">
          {/* Vertical Chain */}
          <line x1="50" y1="0" x2="50" y2="350" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 2" />
          
          {/* Top Lotus */}
          <g transform="translate(50, 80)">
            <path d="M0,0 C-20,0 -25,20 0,25 C25,20 20,0 0,0 Z" fill="#6B8E6B" opacity="0.9" />
            <path d="M0,15 C-15,5 -10,-25 0,-35 C10,-25 15,5 0,15 Z" fill="#E6A8B6" />
            <path d="M0,15 C-5,5 -5,-25 0,-35 C5,-25 5,5 0,15 Z" fill="#D68A9C" />
            <circle cx="0" cy="15" r="3" fill="#D4AF37" />
          </g>

          {/* Middle Lotus */}
          <g transform="translate(50, 180)">
            <path d="M0,0 C-20,0 -25,20 0,25 C25,20 20,0 0,0 Z" fill="#6B8E6B" opacity="0.9" />
            <path d="M0,15 C-15,5 -10,-25 0,-35 C10,-25 15,5 0,15 Z" fill="#E6A8B6" />
            <path d="M0,15 C-5,5 -5,-25 0,-35 C5,-25 5,5 0,15 Z" fill="#D68A9C" />
            <circle cx="0" cy="15" r="3" fill="#D4AF37" />
          </g>
          
          {/* Bottom Lotus */}
          <g transform="translate(50, 280)">
            <path d="M0,0 C-20,0 -25,20 0,25 C25,20 20,0 0,0 Z" fill="#6B8E6B" opacity="0.9" />
            <path d="M0,15 C-15,5 -10,-25 0,-35 C10,-25 15,5 0,15 Z" fill="#E6A8B6" />
            <path d="M0,15 C-5,5 -5,-25 0,-35 C5,-25 5,5 0,15 Z" fill="#D68A9C" />
            <circle cx="0" cy="15" r="3" fill="#D4AF37" />
          </g>

          {/* Bell */}
          <g transform="translate(50, 360)">
            <path d="M-15,10 C-15,-15 15,-15 15,10 L22,25 L-22,25 Z" fill="url(#goldGrad)" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }} />
            <path d="M-10,-2 C0,-10 10,-2 10,-2" fill="none" stroke="#B0852A" strokeWidth="1.5" />
            <circle cx="0" cy="28" r="4" fill="#D4AF37" />
            <circle cx="0" cy="-5" r="3" fill="#D4AF37" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export const PremiumBackground = ({ withPetals = true }: { withPetals?: boolean }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Very subtle large mandalas in the corners */}
      <RotatingMandala className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] opacity-[0.08]" />
      <RotatingMandala className="absolute top-[30%] -right-[15%] w-[50%] h-[50%] opacity-[0.06]" />
      <RotatingMandala className="absolute -bottom-[5%] -left-[5%] w-[30%] h-[30%] opacity-[0.08]" />
      
      <HangingLotusBells />
      {withPetals && <FallingPetals />}
    </div>
  );
};

export const AnimatedDivider = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center w-full ${className ?? "my-4"}`}>
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent origin-right" 
      />
      <motion.svg 
        viewBox="0 0 24 24" 
        className="w-4 h-4 mx-3 text-gold drop-shadow-sm"
        initial={{ rotate: -90, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
      >
        <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" opacity="0.9" />
      </motion.svg>
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent origin-left" 
      />
    </div>
  );
};
