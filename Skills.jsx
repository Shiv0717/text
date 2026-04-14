"use client";

import { useState, useEffect, useRef } from "react";

const leaders = [
  {
    tag: "CHANCELLOR",
    name: "Prof. Richard Ashby",
    title: "Chancellor of the University",
    bio: "Leading the university's strategic vision since 2018, Prof. Ashby has overseen a 40% growth in research output and spearheaded the university's sustainability charter — building record international partnerships across 68 countries.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    stat1: { val: "68", label: "Countries" },
    stat2: { val: "40%", label: "Research Growth" },
  },
  {
    tag: "VICE-CHANCELLOR",
    name: "Dr. Sarah Linton",
    title: "Vice-Chancellor & Provost",
    bio: "Dr. Linton oversees all academic programs and day-to-day institutional operations with a relentless focus on inclusion and student success. She introduced the landmark 'Open Campus' initiative in 2021.",
    img: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&q=80",
    stat1: { val: "12K", label: "Students Served" },
    stat2: { val: "94%", label: "Satisfaction" },
  },
  {
    tag: "DEAN OF RESEARCH",
    name: "Prof. James Baird",
    title: "Dean of Research & Innovation",
    bio: "Prof. Baird directs £380M in annual research grants and leads the university's seven flagship innovation labs. His lab-to-market program has produced 14 spinoff companies in three years.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    stat1: { val: "£380M", label: "Annual Grants" },
    stat2: { val: "14", label: "Spinoffs" },
  },
  {
    tag: "CFO",
    name: "Dr. Anita Wren",
    title: "Chief Financial Officer",
    bio: "Dr. Wren manages a £2.4B endowment with a long-horizon investment thesis aligned to the university's 2030 sustainability targets. She previously served as Deputy Treasurer at the Bank of England.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    stat1: { val: "£2.4B", label: "Endowment" },
    stat2: { val: "2030", label: "Target Year" },
  },
];

export default function UniversityLeadership() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, idx) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setFading(true);
            setTimeout(() => {
              setActiveIndex(idx);
              setFading(false);
            }, 250);
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const leader = leaders[activeIndex];

  return (
    <div className="min-h-screen bg-[#f5f3ef] font-[Jost,sans-serif]">

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Jost:wght@200;300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* ══ TOPBAR ══ */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-8 md:px-14 bg-[#f5f3ef]/90 backdrop-blur-md border-b border-black/[0.07]">
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
            <path d="M14 2L22 8V20L14 26L6 20V8Z" stroke="#1a1a1a" strokeWidth="1" fill="none" />
            <circle cx="14" cy="14" r="3" fill="#1a1a1a" />
          </svg>
          <span className="font-[Playfair_Display,serif] text-[15px] tracking-wide text-neutral-800">
            Harwick University
          </span>
        </div>
        <nav className="hidden md:flex gap-8">
          {["About", "Academics", "Leadership", "Research"].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className={`text-[11px] tracking-[0.16em] uppercase transition-colors duration-200 ${
                item === "Leadership"
                  ? "text-neutral-900 border-b border-neutral-900 pb-px"
                  : "text-neutral-400 hover:text-neutral-800"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* ══ TWO-COLUMN LAYOUT ══ */}
      <div className="flex flex-col md:flex-row pt-[60px]">

        {/* ── LEFT sticky image panel ── */}
        <div className="md:w-[48%] md:sticky md:top-[60px] md:h-[calc(100vh-60px)] relative overflow-hidden">

          {/* Photo with crossfade */}
          <img
            src={leader.img}
            alt={leader.name}
            className={`w-full h-full object-cover object-top transition-all duration-500 ${
              fading ? "opacity-0 scale-105" : "opacity-100 scale-100"
            }`}
          />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none" />

          {/* Progress dots */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col gap-[6px]">
            {leaders.map((_, i) => (
              <div
                key={i}
                className={`w-[3px] rounded-full bg-white transition-all duration-300 ${
                  i === activeIndex ? "h-[18px] opacity-100" : "h-[3px] opacity-30"
                }`}
              />
            ))}
          </div>

          {/* Nameplate */}
          <div
            className={`absolute bottom-0 left-0 right-0 px-9 pb-8 transition-opacity duration-300 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#e05c3a] font-medium mb-2">
              {leader.tag}
            </p>
            <h2 className="font-[Playfair_Display,serif] text-[28px] text-white leading-tight">
              {leader.name}
            </h2>
            <p className="text-[11px] tracking-[0.14em] uppercase text-white/50 font-light mt-1">
              {leader.title}
            </p>
          </div>
        </div>

        {/* ── RIGHT scrolling panel ── */}
        <div className="md:w-[52%] flex flex-col divide-y divide-black/[0.06]">

          {/* Intro header */}
          <div className="px-10 md:px-16 py-20">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#e05c3a] font-medium mb-5">
              University Leadership
            </p>
            <h1 className="font-[Playfair_Display,serif] text-[44px] md:text-[52px] text-neutral-900 leading-[1.1] mb-5">
              The people who<br />shape our future
            </h1>
            <p className="text-[14px] text-neutral-400 font-light leading-relaxed max-w-sm">
              Scroll to explore the executive team driving Harwick&apos;s academic
              excellence, research mission, and global vision.
            </p>
          </div>

          {/* Leader cards */}
          {leaders.map((l, idx) => (
            <article
              key={idx}
              ref={(el) => { sectionRefs.current[idx] = el; }}
              className="group min-h-screen flex flex-col justify-center px-10 md:px-16 py-20 hover:bg-white/60 transition-colors duration-500"
            >
              {/* Tag + rule */}
              <div className="flex items-center gap-3 mb-6">
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#e05c3a] font-medium">
                  {l.tag}
                </p>
                <span className="block h-px w-8 bg-[#e05c3a]/40" />
              </div>

              {/* Name */}
              <h2 className="font-[Playfair_Display,serif] text-[36px] md:text-[44px] text-neutral-900 leading-tight mb-2">
                {l.name}
              </h2>

              {/* Role title */}
              <p className="text-[11px] tracking-[0.16em] uppercase text-neutral-400 font-light mb-7">
                {l.title}
              </p>

              {/* Bio */}
              <p className="text-[15px] text-neutral-500 font-light leading-[1.85] max-w-[480px] mb-10">
                {l.bio}
              </p>

              {/* Stats */}
              <div className="flex gap-10 border-t border-black/[0.07] pt-7 mb-10">
                <div>
                  <p className="font-[Playfair_Display,serif] text-[28px] text-neutral-900">
                    {l.stat1.val}
                  </p>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-neutral-400 mt-1">
                    {l.stat1.label}
                  </p>
                </div>
                <div>
                  <p className="font-[Playfair_Display,serif] text-[28px] text-neutral-900">
                    {l.stat2.val}
                  </p>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-neutral-400 mt-1">
                    {l.stat2.label}
                  </p>
                </div>
              </div>

              {/* Profile link */}
              <a
                href="#"
                className="group/link inline-flex items-center gap-2 text-[12px] tracking-[0.1em] uppercase text-neutral-400 hover:text-neutral-900 transition-colors duration-200 w-fit"
              >
                Full profile
                <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
                  →
                </span>
              </a>
            </article>
          ))}

          {/* Footer */}
          <div className="px-10 md:px-16 py-10 text-[10px] tracking-[0.16em] uppercase text-neutral-300">
            Harwick University · Leadership Directory · Est. 1842
          </div>
        </div>
      </div>
    </div>
  );
}