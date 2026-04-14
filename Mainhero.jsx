"use client";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 0,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=85&fit=crop",
    tag: "Research & Innovation",
    headline: "Where Curiosity\nMeets Discovery",
    sub: "Join 28,000 students pushing the boundaries of science, arts, and technology in the heart of the Midwest.",
    cta: "Explore Research",
    accent: "#1b5e2b",
    light: "#d4edda",
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=85&fit=crop",
    tag: "Student Life",
    headline: "A Campus That\nFeels Like Home",
    sub: "200+ clubs, championship athletics, and a community that celebrates every voice and story.",
    cta: "Discover Campus",
    accent: "#0d3b6e",
    light: "#dce9f8",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=85&fit=crop",
    tag: "Academics",
    headline: "200 Paths.\nOne Destination.",
    sub: "Choose from 200 programs across 9 colleges. Your career begins here — shaped by world-class faculty.",
    cta: "View Programs",
    accent: "#6b2c2c",
    light: "#f8e4e4",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1607013407627-6352b4291570?w=1600&q=85&fit=crop",
    tag: "Global Community",
    headline: "Think Global,\nAct Local",
    sub: "Study abroad in 60+ countries or collaborate with international students right here on campus.",
    cta: "Go Global",
    accent: "#2c4a6b",
    light: "#dde8f5",
  },
];

const stats = [
  { value: "28K+", label: "Students" },
  { value: "#42", label: "National Rank" },
  { value: "96%", label: "Employment Rate" },
  { value: "60+", label: "Study Abroad" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (idx, dir = 1) => {
    if (animating || idx === current) return;
    setDirection(dir);
    setPrev(current);
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 750);
  };

  const next = () => goTo((current + 1) % slides.length, 1);
  const prev_ = () => goTo((current - 1 + slides.length) % slides.length, -1);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 6000);
    return () => clearInterval(intervalRef.current);
  }, [current, paused, animating]);

  const slide = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        .hero-root {
          font-family: 'Outfit', sans-serif;
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 620px;
          max-height: 900px;
          overflow: hidden;
          background: #0a0a0a;
        }

        /* BG image layers */
        .slide-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          will-change: transform, opacity;
        }

        .slide-bg.entering {
          animation: slideEnter 0.75s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .slide-bg.leaving {
          animation: slideLeave 0.75s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slideEnter {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideLeave {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.97); }
        }

        /* Ken Burns on active slide */
        .slide-bg.active-kb {
          animation: kenBurns 7s ease-out forwards;
        }
        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }

        /* Overlay */
        .slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.45) 50%,
            rgba(0,0,0,0.15) 100%
          );
        }

        /* Content animation */
        .hero-content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 6% 7%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px 5px 8px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
          animation: fadeUp 0.6s ease 0.1s both;
        }
        .tag-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }

        .hero-headline {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(3rem, 6vw, 5.5rem);
          line-height: 1.05;
          color: #fff;
          white-space: pre-line;
          margin-bottom: 20px;
          animation: fadeUp 0.6s ease 0.2s both;
        }
        .hero-headline em {
          font-style: italic;
          color: #fff;
        }

        .hero-sub {
          font-size: clamp(0.9rem, 1.5vw, 1.05rem);
          font-weight: 300;
          color: rgba(255,255,255,0.78);
          max-width: 480px;
          line-height: 1.7;
          margin-bottom: 32px;
          animation: fadeUp 0.6s ease 0.32s both;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          animation: fadeUp 0.6s ease 0.42s both;
        }

        .btn-primary {
          padding: 13px 28px;
          border-radius: 6px;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .btn-ghost {
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: 0.04em;
          cursor: pointer;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff;
          backdrop-filter: blur(8px);
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-block;
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.5);
          transform: translateY(-2px);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Stats bar */
        .stats-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 20;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(16px);
          border-top: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: stretch;
          animation: fadeUp 0.8s ease 0.6s both;
        }
        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px 12px;
          border-right: 1px solid rgba(255,255,255,0.1);
          transition: background 0.2s;
          cursor: default;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: rgba(255,255,255,0.08); }
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 1.7rem;
          color: #fff;
          line-height: 1;
        }
        .stat-label {
          font-size: 10.5px;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          margin-top: 4px;
        }

        /* Slide counter + nav */
        .slider-controls {
          position: absolute;
          top: 50%;
          right: 40px;
          transform: translateY(-50%);
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .nav-arrow {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
          transition: all 0.2s;
          backdrop-filter: blur(8px);
        }
        .nav-arrow:hover {
          background: rgba(255,255,255,0.22);
          border-color: rgba(255,255,255,0.5);
          transform: scale(1.08);
        }

        .slide-counter {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          writing-mode: vertical-rl;
          letter-spacing: 0.1em;
          padding: 8px 0;
        }
        .slide-counter span {
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
        }

        /* Dots */
        .dots {
          position: absolute;
          bottom: 90px;
          left: 6%;
          z-index: 20;
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .dot {
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 100px;
          height: 3px;
        }
        .dot.active { width: 28px; }
        .dot.inactive { width: 10px; background: rgba(255,255,255,0.35) !important; }
        .dot:hover { opacity: 0.8; }

        /* Progress bar */
        .progress-line {
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          z-index: 30;
          animation: progressFill 6s linear;
          animation-play-state: running;
        }
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* Scroll hint */
        .scroll-hint {
          position: absolute;
          bottom: 90px;
          right: 40px;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0.5;
        }
        .scroll-hint span {
          font-size: 9px;
          letter-spacing: 0.18em;
          color: #fff;
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }
        .scroll-arrow {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(255,255,255,0), #fff);
          animation: scrollPulse 1.8s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.5; }
          50% { transform: scaleY(0.6); opacity: 1; }
        }

        @media (max-width: 768px) {
          .hero-headline { font-size: 2.5rem; }
          .slider-controls { right: 16px; }
          .scroll-hint { display: none; }
          .stats-bar .stat-item { padding: 12px 6px; }
          .stat-value { font-size: 1.3rem; }
          .dots { bottom: 95px; }
        }
      `}</style>

      <section
        className="hero-root"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Progress bar */}
        {!paused && (
          <div
            key={current}
            className="progress-line"
            style={{ background: slide.accent }}
          />
        )}

        {/* Leaving slide */}
        {prevSlide && (
          <div
            key={`prev-${prev}`}
            className="slide-bg leaving"
            style={{ backgroundImage: `url(${prevSlide.image})` }}
          />
        )}

        {/* Active slide */}
        <div
          key={`active-${current}`}
          className={`slide-bg ${animating ? 'entering' : 'active-kb'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />

        {/* Overlay */}
        <div className="slide-overlay" />

        {/* Main content */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
          <div className="hero-content" style={{ paddingBottom: 'calc(7% + 64px)' }}>

            {/* Tag */}
            <div
              key={`tag-${current}`}
              className="tag-pill"
              style={{ background: slide.light + '22', border: `1px solid ${slide.light}55`, color: slide.light }}
            >
              <span className="tag-dot" style={{ background: slide.accent === '#1b5e2b' ? '#6ee7a0' : slide.light }} />
              {slide.tag}
            </div>

            {/* Headline */}
            <h1
              key={`headline-${current}`}
              className="hero-headline"
            >
              {slide.headline}
            </h1>

            {/* Subtext */}
            <p
              key={`sub-${current}`}
              className="hero-sub"
            >
              {slide.sub}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${current}`}
              className="hero-actions"
            >
              <a
                href="#"
                className="btn-primary"
                style={{ background: slide.accent, color: '#fff' }}
              >
                {slide.cta}
              </a>
              <a href="#" className="btn-ghost">
                Apply Now →
              </a>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="dots">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`dot ${i === current ? 'active' : 'inactive'}`}
              style={i === current ? { background: slide.accent } : {}}
            />
          ))}
        </div>

        {/* Right side controls */}
        <div className="slider-controls">
          <button className="nav-arrow" onClick={prev_} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>

          <div className="slide-counter">
            <span>{String(current + 1).padStart(2, '0')}</span>
            &nbsp;/&nbsp;
            {String(slides.length).padStart(2, '0')}
          </div>

          <button className="nav-arrow" onClick={next} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-arrow" />
        </div>

        {/* Stats bar */}
        <div className="stats-bar">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}