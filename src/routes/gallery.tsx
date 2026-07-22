import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/invitation/PageShell";
import { AnimatedDivider } from "@/components/invitation/AnimatedDecorations";

export const Route = createFileRoute("/gallery")({ component: GalleryPage });

import firstGlance from "@/assets/first_glance.png";
import sparksFly from "@/assets/sparks_fly.png";
import twoWorldsUnite from "@/assets/two_worlds_unite.png";
import thePromise from "@/assets/the_promise.png";

const storyData = [
  {
    title: "The First Glance",
    date: "October 2022",
    img: firstGlance, 
    text: "A chance encounter in a beautiful garden turned into an evening we would never forget.",
  },
  {
    title: "Sparks Fly",
    date: "February 2023",
    img: sparksFly, 
    text: "Under a canopy of fairy lights, we knew this was something truly special.",
  },
  {
    title: "Two Worlds Unite",
    date: "January 2024",
    img: twoWorldsUnite, 
    text: "Our families met with open arms, blending traditions and sharing blessings.",
  },
  {
    title: "The Promise",
    date: "May 2024",
    img: thePromise, 
    text: "With a ring and a promise, we decided to step into forever together.",
  },
];

const HeaderFiligree = () => (
  <motion.svg 
    viewBox="0 0 200 30" 
    className="w-48 md:w-56 mx-auto text-gold mt-1 md:mt-2 drop-shadow-md"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <path d="M10 15 Q50 15, 100 5 T190 15 M10 15 Q50 15, 100 25 T190 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M50 15 L53 10 L56 15 L61 18 L56 21 L53 26 L50 21 L45 18 Z" fill="currentColor" transform="translate(-50, -15) scale(0.6) translate(50, 15)" />
    <path d="M150 15 L153 10 L156 15 L161 18 L156 21 L153 26 L150 21 L145 18 Z" fill="currentColor" transform="translate(-150, -15) scale(0.6) translate(150, 15)" />
    <circle cx="100" cy="15" r="3" fill="currentColor" />
  </motion.svg>
);

const CardFiligreeCorners = () => (
  <>
    {/* SVG Jali pattern/Filigree overlay around the card */}
    <div className="absolute inset-0 pointer-events-none border-[1.5px] border-gold/60 rounded-t-full rounded-b-sm m-[2px] z-20 mix-blend-overlay"></div>
    {/* Top Left Mandala */}
    <svg viewBox="0 0 20 20" className="absolute top-20 left-1 w-4 h-4 text-gold drop-shadow-sm z-20 opacity-80" fill="currentColor">
      <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
      <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
    {/* Top Right Mandala */}
    <svg viewBox="0 0 20 20" className="absolute top-20 right-1 w-4 h-4 text-gold drop-shadow-sm z-20 opacity-80" fill="currentColor">
      <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
      <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
    {/* Bottom Left Mandala */}
    <svg viewBox="0 0 20 20" className="absolute bottom-2 left-2 w-4 h-4 text-gold drop-shadow-sm z-20 opacity-80" fill="currentColor">
      <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
      <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
    {/* Bottom Right Mandala */}
    <svg viewBox="0 0 20 20" className="absolute bottom-2 right-2 w-4 h-4 text-gold drop-shadow-sm z-20 opacity-80" fill="currentColor">
      <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
      <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  </>
);

const StoryCard = ({ item, index, isActive, onClick }: { item: typeof storyData[0], index: number, isActive: boolean, onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col items-center cursor-pointer transition-all duration-500 origin-top w-full
        ${isActive ? 'z-40 scale-105 md:scale-105' : 'z-10 scale-100 hover:scale-[1.02]'}
      `}
      style={{
        boxShadow: isActive ? "0 15px 35px rgba(201,162,39,0.35)" : "none",
        borderRadius: "9999px 9999px 0.375rem 0.375rem"
      }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="w-full relative"
      >
        {/* Outer Golden Background for Border */}
        {/* We fix the height aspect so the base never changes height in the grid! */}
        <div className="w-full relative rounded-t-[70px] rounded-b-xl transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.2)] overflow-hidden">
          
          {/* Animated Spinning Border Container */}
          <div className="absolute inset-0 rounded-t-[70px] rounded-b-xl overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_var(--border-angle),#D4AF37_0%,transparent_15%,transparent_85%,#D4AF37_100%)] animate-spin-border opacity-80" />
          </div>
          
          <div className="absolute inset-[2px] rounded-t-[68px] rounded-b-[10px] bg-[#FDFBF7] z-0" />

          {/* Inner Container */}
          <div className="relative z-10 rounded-t-[65px] rounded-b-lg flex flex-col overflow-hidden m-[4px]">
            
            {/* Image Section - Ultra sharp */}
            <div className={`relative w-full aspect-[4/5] sm:aspect-[4/5] md:aspect-[3/4] shrink-0 overflow-hidden rounded-t-[65px] rounded-b-lg p-0.5`}>
               {/* SVG Filigree Corners/Borders Overlay */}
               <CardFiligreeCorners />

               <img 
                 src={item.img} 
                 alt={item.title} 
                 className="w-full h-full object-cover rounded-t-[65px] rounded-b-md pointer-events-none" 
               />
               
               {/* Fading text on image (hides when expanded) */}
               <div className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#1A0508]/90 via-[#2A080D]/40 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
               <div className={`absolute bottom-3 sm:bottom-4 left-0 w-full text-center z-20 px-2 pointer-events-none transition-all duration-300 ${isActive ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  <h4 className="script text-xl sm:text-2xl md:text-3xl text-[#FDF5D3] drop-shadow-md mb-0.5 md:mb-1 whitespace-nowrap">
                    {item.title}
                  </h4>
                  <div className="w-8 h-[1px] bg-gold/50 mx-auto mb-1.5" />
                  <p className="label text-[8px] sm:text-[9px] md:text-[10px] text-gold uppercase tracking-[0.3em] font-bold drop-shadow-md">
                    {item.date}
                  </p>
               </div>
            </div>

            {/* EXPANDED TEXT - OVERLAYS ON IMAGE */}
            <AnimatePresence>
              {isActive && (
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 right-0 bg-[#FDFBF7]/95 backdrop-blur-md z-30 border-t-[2px] border-[#D4AF37] rounded-b-lg shadow-[0_-10px_35px_rgba(122,31,43,0.2)] flex flex-col items-center justify-center p-4 sm:p-5"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#cda34f_1px,_transparent_1px)] bg-[length:6px_6px] opacity-10 pointer-events-none" />
                  
                  <h4 className="script text-xl sm:text-2xl md:text-3xl text-maroon mb-1.5 leading-none whitespace-nowrap relative z-10">{item.title}</h4>
                  <p className="label text-[9px] md:text-[10px] text-gold uppercase tracking-[0.3em] font-bold relative z-10">{item.date}</p>
                  <AnimatedDivider className="w-3/4 sm:w-1/2 -my-2 relative z-10" />
                  <p className="text-[10px] md:text-[11px] text-[#3A2218] leading-relaxed px-1 font-medium pb-1 relative z-10 text-center mt-1">
                    {item.text}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

function GalleryPage() {
  const [activeCard, setActiveCard] = useState<number>(1); // Default to Card 2 ("Sparks Fly")

  return (
    <PageShell>
      {/* 
        Strict height containment to completely prevent scrolling.
        Uses scaling heavily on both mobile and desktop to guarantee fit!
      */}
      <section className="w-full flex flex-col items-center justify-center px-2 sm:px-4 h-full pt-4 pb-4 origin-center scale-[0.90] sm:scale-100 md:scale-[0.95] lg:scale-100 mt-[6vh] md:mt-0 select-none">
        
        {/* HEADER SECTION */}
        <div className="text-center w-full shrink-0 flex flex-col items-center mb-6 md:mb-12">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="label text-[10px] sm:text-[11px] md:text-xs text-gold uppercase tracking-[0.4em] mb-1 font-bold drop-shadow-sm"
          >
            Moments in Time
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-maroon leading-none drop-shadow-lg"
            style={{ textShadow: "0 4px 15px rgba(201,162,39,0.3)" }}
          >
            Our Story
          </motion.h2>
        </div>

        {/* TIMELINE VISUAL (Center) */}
        <div className="flex-1 w-full max-w-6xl flex items-center justify-center relative min-h-0">
          
          {/* 2x2 Grid on Mobile, 4x1 Row on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-10 w-full relative z-10 px-2 lg:px-8 items-start justify-center max-w-sm sm:max-w-md md:max-w-none mx-auto pb-8 md:pb-0">
             {storyData.map((item, idx) => (
                <StoryCard 
                   key={item.title} 
                   item={item} 
                   index={idx} 
                   isActive={activeCard === idx}
                   onClick={() => setActiveCard(activeCard === idx ? -1 : idx)}
                />
             ))}
          </div>

        </div>



      </section>
    </PageShell>
  );
}
