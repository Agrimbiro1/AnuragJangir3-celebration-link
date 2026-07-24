import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/invitation/PageShell";
import { AnimatedDivider } from "@/components/invitation/AnimatedDecorations";

import firstGlance from "@/assets/first_glance.png";
import sparksFly from "@/assets/sparks_fly.png";
import twoWorldsUnite from "@/assets/two_worlds_unite.png";
import thePromise from "@/assets/the_promise.png";

export const Route = createFileRoute("/gallery")({ component: GalleryPage });

// Intricate Calligraphic Flourish
const TitleFlourish = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={`w-8 sm:w-12 md:w-16 h-auto text-gold drop-shadow-md shrink-0 ${className}`}>
    <path d="M0 10 Q25 0, 50 10 T100 10 M25 10 Q37.5 20, 50 10 T75 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="50" cy="10" r="2.5" fill="currentColor" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    <circle cx="90" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

// Sleek Jali Corner Accent
const JaliCorner = ({ className = "" }: { className?: string }) => (
  <svg className={`w-4 h-4 sm:w-5 sm:h-5 text-gold/60 pointer-events-none absolute ${className}`} viewBox="0 0 40 40" fill="none">
    <path d="M0 0H40V4H4V40H0V0Z" fill="currentColor" />
    <circle cx="10" cy="10" r="2.5" fill="currentColor" />
  </svg>
);

const storyData = [
  {
    chapter: "CHAPTER I",
    title: "The First Glance",
    date: "October 2022",
    img: firstGlance,
    quote: "Where time stood still and two paths quietly aligned.",
    text: "A chance encounter in a beautiful garden turned into an evening we would never forget. A simple conversation bloomed into hours of effortless connection.",
  },
  {
    chapter: "CHAPTER II",
    title: "Sparks Fly",
    date: "February 2023",
    img: sparksFly,
    quote: "Under a blanket of stars, magic became our reality.",
    text: "Under a canopy of fairy lights and softly playing music, laughter shared became memories treasured. We both knew this was the start of something truly special.",
  },
  {
    chapter: "CHAPTER III",
    title: "Two Worlds Unite",
    date: "January 2024",
    img: twoWorldsUnite,
    quote: "Two families intertwined with warmth, laughter, and heritage.",
    text: "Our families met with open arms, blending cherished traditions and sharing sacred blessings. Seeing our loved ones bond filled our hearts with immense joy.",
  },
  {
    chapter: "CHAPTER IV",
    title: "The Promise",
    date: "May 2024",
    img: thePromise,
    quote: "A ring exchanged, a lifelong vow sealed forever.",
    text: "With a sacred ring and a heartfelt promise, we decided to step into forever together. Guided by faith, love, and family, our journey officially begins.",
  },
];

function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0); // Always starts from first point (Chapter I)

  const activeStory = storyData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % storyData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + storyData.length) % storyData.length);
  };

  return (
    <PageShell>
      <section className="w-full min-h-[85vh] flex flex-col items-center justify-between sm:justify-center px-3 sm:px-4 pt-[16vh] sm:pt-[22vh] md:pt-16 pb-[74px] sm:pb-6 select-none">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
          
          {/* HEADER SECTION */}
          <div className="text-center w-full shrink-0 flex flex-col items-center mb-2 sm:mb-4">
            <div className="flex items-center justify-center space-x-1 sm:space-x-3 mt-1 sm:mt-2 w-full flex-nowrap">
              <TitleFlourish className="rotate-180 w-8 sm:w-16 md:w-24 text-gold drop-shadow-sm shrink-0" />
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="script text-2xl sm:text-5xl md:text-6xl text-maroon drop-shadow-md leading-tight whitespace-nowrap"
                style={{ textShadow: "0 4px 15px rgba(201,162,39,0.3)" }}
              >
                Our Story
              </motion.h2>
              <TitleFlourish className="w-8 sm:w-16 md:w-24 text-gold drop-shadow-sm shrink-0" />
            </div>
          </div>

          {/* CHAPTER NAVIGATION TIMELINE CONNECTOR (LUXURY ROYAL STEPPER) */}
          <div className="w-full max-w-xl mx-auto mb-4 sm:mb-6 px-3 sm:px-6">
            <div className="relative flex items-center justify-between">
              {/* Background Golden Track Line */}
              <div className="absolute top-[16px] sm:top-[20px] left-5 right-5 h-[3px] bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 z-0 rounded-full" />
              
              {/* Active Animated Golden Progress Track */}
              <motion.div
                className="absolute top-[16px] sm:top-[20px] left-5 h-[3px] bg-gradient-to-r from-gold via-amber-300 to-gold z-0 rounded-full shadow-[0_0_12px_rgba(212,175,55,0.9)]"
                initial={false}
                animate={{
                  width: `calc(${(activeIndex / (storyData.length - 1)) * 100}% - ${(activeIndex / (storyData.length - 1)) * 20}px)`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />

              {storyData.map((item, idx) => {
                const isActive = idx === activeIndex;
                const isPassed = idx <= activeIndex;
                const romanNumerals = ["I", "II", "III", "IV"];

                return (
                  <motion.button
                    key={item.title}
                    onClick={() => setActiveIndex(idx)}
                    whileHover={{ scale: 1.18, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    className="relative z-10 flex flex-col items-center group cursor-pointer"
                  >
                    {/* Active Crown Indicator Spark */}
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-3 text-[10px] sm:text-xs text-gold drop-shadow-md pointer-events-none"
                      >
                        ✦
                      </motion.span>
                    )}

                    {/* Royal Medallion Badge Node */}
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                        isActive
                          ? "bg-gradient-to-br from-maroon via-maroon-deep to-maroon text-gold border-gold shadow-[0_0_22px_rgba(212,175,55,0.95)] scale-110 ring-2 ring-gold/60"
                          : isPassed
                          ? "bg-gradient-to-br from-gold/30 via-cream to-gold/20 text-maroon-deep border-gold shadow-sm"
                          : "bg-cream text-maroon-deep/50 border-gold/40 hover:border-gold"
                      }`}
                    >
                      <span className={`label text-[10px] sm:text-xs font-black tracking-tighter ${isActive ? "text-gold drop-shadow-xs" : "text-maroon-deep"}`}>
                        {idx + 1}
                      </span>
                    </div>


                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* MAIN FEATURED STORYBOOK DISPLAY CARD */}
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Golden Aura Outer Border */}
            <div className="absolute -inset-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-r from-gold/30 via-amber-400/50 to-gold/30 animate-pulse pointer-events-none blur-[2px]" />

            <div className="relative bg-gradient-to-br from-[#FFFDF8] via-[#FDF6E8] to-[#F8EBD4] rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-[0_20px_50px_-15px_rgba(122,31,43,0.25),0_0_0_1px_rgba(212,175,55,0.4)] border-2 border-gold/60 overflow-hidden">
              
              {/* Corner Accents */}
              <JaliCorner className="top-1.5 left-1.5 sm:top-2 sm:left-2" />
              <JaliCorner className="top-1.5 right-1.5 sm:top-2 sm:right-2 rotate-90" />
              <JaliCorner className="bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 -rotate-90" />
              <JaliCorner className="bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 rotate-180" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-5 items-center"
                >
                  {/* Left Column: Chapter Photo Frame (Wide landscape on mobile, Arched Frame on desktop) */}
                  <div className="md:col-span-5 flex flex-col items-center w-full">
                    <div className="relative w-full max-w-full aspect-[2.1/1] sm:aspect-[16/9] md:aspect-[4/5] rounded-xl md:rounded-t-full md:rounded-b-xl overflow-hidden p-1 bg-gradient-to-b from-gold via-amber-200 to-gold shadow-md border border-gold/60 group">
                      <div className="w-full h-full rounded-lg md:rounded-t-full md:rounded-b-lg overflow-hidden relative">
                        <img
                          src={activeStory.img}
                          alt={activeStory.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/60 via-transparent to-transparent" />
                        
                        {/* Chapter Floating Date Tag */}
                        <div className="absolute bottom-2 inset-x-0 text-center">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-maroon-deep/90 text-cream border border-gold/50 label text-[8px] sm:text-[9.5px] font-bold tracking-widest uppercase shadow-sm">
                            {activeStory.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Story Text Content & Controls */}
                  <div className="md:col-span-7 flex flex-col justify-between text-center md:text-left space-y-2 sm:space-y-3">
                    <div>
                      {/* Chapter Badge */}
                      <span className="label text-[8.5px] sm:text-[10px] text-gold uppercase tracking-[0.3em] font-bold">
                        ✦ {activeStory.chapter} ✦
                      </span>

                      {/* Story Title */}
                      <h3 className="script text-2.5xl sm:text-4xl md:text-5xl text-maroon font-bold drop-shadow-xs mt-0.5 mb-1">
                        {activeStory.title}
                      </h3>

                      {/* Quote */}
                      <p className="display italic text-[11px] sm:text-xs md:text-sm text-maroon-deep/90 font-medium">
                        "{activeStory.quote}"
                      </p>

                      {/* Detailed Story Paragraph */}
                      <p className="display text-[11px] sm:text-xs md:text-sm text-maroon-deep/80 leading-relaxed mt-1.5 sm:mt-2">
                        {activeStory.text}
                      </p>
                    </div>

                    {/* Navigation Bar inside Card */}
                    <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-gold/25">
                      <button
                        onClick={handlePrev}
                        className="inline-flex items-center gap-1 px-3 py-1 sm:py-1.5 rounded-full bg-gold/15 hover:bg-gold/30 text-maroon-deep border border-gold/40 label text-[8.5px] sm:text-[10px] font-bold transition-all hover:scale-105 cursor-pointer"
                      >
                        <span>←</span>
                        <span>PREV</span>
                      </button>

                      <span className="label text-[8.5px] sm:text-[10px] text-gold font-bold tracking-widest">
                        {activeIndex + 1} / {storyData.length}
                      </span>

                      <button
                        onClick={handleNext}
                        className="inline-flex items-center gap-1 px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-maroon to-maroon-deep text-cream border border-gold/40 label text-[8.5px] sm:text-[10px] font-bold transition-all hover:scale-105 cursor-pointer shadow-sm"
                      >
                        <span>NEXT</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
