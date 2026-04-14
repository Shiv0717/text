"use client";
import { useState, useEffect, useRef } from "react";

const achievements = [
  {
    id: 1,
    value: 142,
    suffix: "+",
    prefix: "",
    label: "Years of Excellence",
    description: "Founded in 1882, we've shaped generations of leaders, thinkers, and innovators across the globe.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    accent: "#1b5e2b",
    bg: "#f0f7f2",
  },
  {
    id: 2,
    value: 98,
    suffix: "%",
    prefix: "",
    label: "Graduate Employment",
    description: "Nearly every graduate secures employment or graduate admission within six months of completing their degree.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    accent: "#0d3b6e",
    bg: "#eef4fb",
  },
  {
    id: 3,
    value: 28,
    suffix: "K",
    prefix: "",
    label: "Active Students",
    description: "A thriving community of undergraduate, graduate, and international students across 9 colleges.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    accent: "#7a3c1a",
    bg: "#fdf3ed",
  },
  {
    id: 4,
    value: 320,
    suffix: "M",
    prefix: "$",
    label: "Research Funding",
    description: "Annual research investment powering breakthroughs in medicine, climate science, engineering, and the arts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    accent: "#4a2c7a",
    bg: "#f4f0fb",
  },
  {
    id: 5,
    value: 42,
    suffix: "",
    prefix: "#",
    label: "National Ranking",
    description: "Ranked among the top 50 universities nationally by U.S. News & World Report for the fifth consecutive year.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    accent: "#1b5e2b",
    bg: "#f0f7f2",
  },
  {
    id: 6,
    value: 180,
    suffix: "+",
    prefix: "",
    label: "Student Clubs",
    description: "From robotics to theatre, debate to dance — there's a community for every passion and curiosity.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    accent: "#0d3b6e",
    bg: "#eef4fb",
  },
];

const awards = [
  { year: "2025", title: "Research University of the Year", body: "National Higher Education Awards" },
  { year: "2024", title: "Best Campus Sustainability Initiative", body: "Green University Coalition" },
  { year: "2024", title: "Top Employer Partner Award", body: "Fortune 500 Consortium" },
  { year: "2023", title: "Excellence in Diversity & Inclusion", body: "HEED Award, Insight Into Diversity" },
  { year: "2023", title: "Innovation in Student Support", body: "NASPA Student Affairs Awards" },
];

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function StatCard({ item, index, started }) {
  const count = useCountUp(item.value, 1800, started);

  return (
    <div
      className="stat-card"
      style={{
        animationDelay: `${index * 0.1}s`,
        "--accent": item.accent,
        "--bg": item.bg,
      }}
    >
      <div className="stat-icon-wrap" style={{ background: item.bg, color: item.accent }}>
        {item.icon}
      </div>
      <div className="stat-number">
        <span className="stat-prefix" style={{ color: item.accent }}>{item.prefix}</span>
        <span style={{ color: item.accent }}>{started ? count.toLocaleString() : 0}</span>
        <span className="stat-suffix" style={{ color: item.accent }}>{item.suffix}</span>
      </div>
      <div className="stat-label">{item.label}</div>
      <div className="stat-desc">{item.description}</div>
      <div className="stat-underline" style={{ background: item.accent }} />
    </div>
  );
}

export default function AchievementsSection() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');

        .ach-root {
          font-family: 'Outfit', sans-serif;
          background: #0f1a12;
          overflow: hidden;
          position: relative;
        }

        /* Subtle texture overlay */
        .ach-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 20%, rgba(27,94,43,0.18) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(13,59,110,0.14) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .ach-container {
          max-width: 1260px;
          margin: 0 auto;
          padding: 100px 40px;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .ach-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: end;
          margin-bottom: 72px;
        }

        .ach-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .ach-eyebrow-line {
          width: 32px;
          height: 2px;
          background: #4caf70;
          border-radius: 2px;
        }
        .ach-eyebrow-text {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #4caf70;
        }

        .ach-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 600;
          color: #f5f0e8;
          line-height: 1.08;
        }
        .ach-title em {
          font-style: italic;
          color: #6ed98a;
        }

        .ach-subtitle {
          font-size: 14.5px;
          font-weight: 300;
          color: #7a9a82;
          line-height: 1.75;
          max-width: 420px;
          align-self: end;
        }

        /* Stats grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 72px;
        }

        .stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          animation: cardReveal 0.6s ease both;
          cursor: default;
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stat-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-4px);
        }

        /* Glow on hover */
        .stat-card::after {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0;
          filter: blur(60px);
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .stat-card:hover::after { opacity: 0.12; }

        .stat-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          opacity: 0.92;
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .stat-prefix {
          font-size: 2rem;
          vertical-align: super;
          font-weight: 600;
          opacity: 0.8;
          margin-right: 2px;
        }
        .stat-suffix {
          font-size: 2rem;
          font-weight: 600;
          opacity: 0.8;
          margin-left: 1px;
        }

        .stat-label {
          font-size: 13px;
          font-weight: 600;
          color: #d0e8d4;
          letter-spacing: 0.04em;
          margin-bottom: 12px;
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 0.12em;
        }
        .stat-desc {
          font-size: 13px;
          font-weight: 300;
          color: #5a7a62;
          line-height: 1.65;
        }
        .stat-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 0;
          border-radius: 0 3px 0 0;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .stat-card:hover .stat-underline { width: 100%; }

        /* ── Divider ── */
        .section-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent);
          margin-bottom: 72px;
        }

        /* ── Awards timeline ── */
        .awards-section {}
        .awards-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 36px;
        }
        .awards-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-style: italic;
          color: #f5f0e8;
          font-weight: 400;
        }
        .awards-see-all {
          font-size: 12px;
          font-weight: 500;
          color: #4caf70;
          letter-spacing: 0.06em;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s;
        }
        .awards-see-all:hover { gap: 10px; }

        .awards-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .award-row {
          display: grid;
          grid-template-columns: 60px 1fr auto;
          align-items: center;
          gap: 24px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: background 0.2s;
          cursor: default;
          position: relative;
        }
        .award-row:first-child { border-top: 1px solid rgba(255,255,255,0.06); }
        .award-row:hover { background: rgba(255,255,255,0.025); margin: 0 -24px; padding: 20px 24px; border-radius: 8px; }

        .award-year {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #4caf70;
          line-height: 1;
        }
        .award-title {
          font-size: 14px;
          font-weight: 500;
          color: #d0e8d4;
          margin-bottom: 3px;
        }
        .award-body {
          font-size: 12px;
          color: #5a7a62;
          font-weight: 300;
        }
        .award-badge {
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(76,175,112,0.12);
          border: 1px solid rgba(76,175,112,0.25);
          font-size: 10px;
          font-weight: 600;
          color: #4caf70;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }

        /* Bottom CTA strip */
        .ach-cta-strip {
          margin-top: 72px;
          padding: 48px 56px;
          border-radius: 20px;
          background: linear-gradient(135deg, #1b5e2b 0%, #0f3d1c 60%, #0d2e17 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          position: relative;
          overflow: hidden;
        }
        .ach-cta-strip::before {
          content: '';
          position: absolute;
          right: -80px;
          top: -80px;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
        }
        .ach-cta-strip::after {
          content: '';
          position: absolute;
          right: 80px;
          bottom: -100px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
        }
        .cta-strip-text {
          position: relative;
          z-index: 1;
        }
        .cta-strip-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.9rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }
        .cta-strip-sub {
          font-size: 13.5px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
        }
        .cta-strip-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }
        .cta-btn-white {
          padding: 13px 26px;
          border-radius: 8px;
          background: #fff;
          color: #1b5e2b;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          text-decoration: none;
        }
        .cta-btn-white:hover {
          background: #f0faf3;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .cta-btn-outline {
          padding: 12px 24px;
          border-radius: 8px;
          background: transparent;
          color: rgba(255,255,255,0.85);
          font-size: 13.5px;
          font-weight: 500;
          border: 1.5px solid rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .cta-btn-outline:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.55);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .ach-header { grid-template-columns: 1fr; gap: 20px; }
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr; }
          .ach-container { padding: 60px 20px; }
          .ach-cta-strip { flex-direction: column; padding: 32px 24px; }
          .award-row { grid-template-columns: 50px 1fr; }
          .award-badge { display: none; }
        }
      `}</style>

      <section className="ach-root" ref={sectionRef}>
        <div className="ach-container">

          {/* Header */}
          <div className="ach-header">
            <div>
              <div className="ach-eyebrow">
                <div className="ach-eyebrow-line" />
                <span className="ach-eyebrow-text">Our Achievements</span>
              </div>
              <h2 className="ach-title">
                Numbers That<br /><em>Tell Our Story</em>
              </h2>
            </div>
            <p className="ach-subtitle">
              Over a century of academic excellence, groundbreaking research, and transformative student experiences — reflected in the milestones that define who we are.
            </p>
          </div>

          {/* Stats grid */}
          <div className="stats-grid">
            {achievements.map((item, i) => (
              <StatCard key={item.id} item={item} index={i} started={started} />
            ))}
          </div>

          <div className="section-divider" />

          {/* Awards */}
          <div className="awards-section">
            <div className="awards-header">
              <h3 className="awards-title">Recognition & Awards</h3>
              <a href="#" className="awards-see-all">
                View all awards
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="awards-list">
              {awards.map((award, i) => (
                <div key={i} className="award-row">
                  <div className="award-year">{award.year}</div>
                  <div>
                    <div className="award-title">{award.title}</div>
                    <div className="award-body">{award.body}</div>
                  </div>
                  <div className="award-badge">Award</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA strip */}
          <div className="ach-cta-strip">
            <div className="cta-strip-text">
              <div className="cta-strip-title">Ready to Be Part of the Story?</div>
              <div className="cta-strip-sub">Join a community where your achievements become our legacy.</div>
            </div>
            <div className="cta-strip-actions">
              <a href="#" className="cta-btn-white">Apply Now</a>
              <a href="#" className="cta-btn-outline">Learn More</a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
