"use client";
import { useState, useRef } from "react";

const navItems = [
  {
    label: "Academics",
    mega: {
      featured: [
        { label: "Academics Home", href: "#", highlight: true },
        { label: "Areas of Study", href: "#" },
        { label: "Academic Opportunities", href: "#" },
        { label: "Accreditation", href: "#" },
      ],
      secondary: [
        { label: "Continuing Education", href: "#" },
        { label: "Career and Technical Education", href: "#" },
        { label: "English For Non-Native Speakers", href: "#" },
        { label: "English Language Studies", href: "#" },
      ],
      cta: {
        title: "Find What You Need",
        links: [
          { label: "Search for Courses", icon: "⌕" },
          { label: "Course Catalog", icon: "◫" },
          { label: "Library", icon: "⊞" },
          { label: "Transfer Services", icon: "⇄" },
          { label: "Tutoring & Academic Support", icon: "◎" },
        ],
      },
    },
  },
  {
    label: "Admissions",
    mega: {
      featured: [
        { label: "Admissions Home", href: "#", highlight: true },
        { label: "How to Apply", href: "#" },
        { label: "New Student Orientation", href: "#" },
        { label: "International Students", href: "#" },
      ],
      secondary: [
        { label: "Dual Credit", href: "#" },
        { label: "Transfer Students", href: "#" },
        { label: "Veterans & Military", href: "#" },
        { label: "Placement Testing", href: "#" },
      ],
      cta: {
        title: "Get Started Today",
        links: [
          { label: "Apply Now", icon: "✎" },
          { label: "Visit Campus", icon: "◈" },
          { label: "Request Info", icon: "◉" },
          { label: "Contact Admissions", icon: "◌" },
          { label: "Virtual Tour", icon: "◷" },
        ],
      },
    },
  },
  {
    label: "Cost & Aid",
    mega: {
      featured: [
        { label: "Cost & Aid Home", href: "#", highlight: true },
        { label: "Tuition & Fees", href: "#" },
        { label: "Scholarships", href: "#" },
        { label: "Grants", href: "#" },
      ],
      secondary: [
        { label: "FAFSA Guide", href: "#" },
        { label: "Payment Plans", href: "#" },
        { label: "Veterans Benefits", href: "#" },
        { label: "Foundation Awards", href: "#" },
      ],
      cta: {
        title: "Financial Resources",
        links: [
          { label: "Net Price Calculator", icon: "◧" },
          { label: "Apply for Aid", icon: "◨" },
          { label: "Cost Estimator", icon: "◩" },
          { label: "Scholarship Search", icon: "⌕" },
          { label: "Billing Portal", icon: "◫" },
        ],
      },
    },
  },
  {
    label: "Student Experience",
    mega: {
      featured: [
        { label: "Student Life Home", href: "#", highlight: true },
        { label: "Clubs & Organizations", href: "#" },
        { label: "Athletics", href: "#" },
        { label: "Student Government", href: "#" },
      ],
      secondary: [
        { label: "Health & Wellness", href: "#" },
        { label: "Career Services", href: "#" },
        { label: "Disability Resources", href: "#" },
        { label: "Multicultural Center", href: "#" },
      ],
      cta: {
        title: "Campus Resources",
        links: [
          { label: "Student Portal", icon: "◈" },
          { label: "Campus Map", icon: "◎" },
          { label: "Event Calendar", icon: "◷" },
          { label: "Dining Services", icon: "◉" },
          { label: "Bookstore", icon: "◫" },
        ],
      },
    },
  },
  {
    label: "About",
    mega: {
      featured: [
        { label: "About COD", href: "#", highlight: true },
        { label: "President's Office", href: "#" },
        { label: "Board of Trustees", href: "#" },
        { label: "Strategic Plan", href: "#" },
      ],
      secondary: [
        { label: "News & Events", href: "#" },
        { label: "Community Partnership", href: "#" },
        { label: "Sustainability", href: "#" },
        { label: "Employment", href: "#" },
      ],
      cta: {
        title: "Connect With Us",
        links: [
          { label: "Contact Us", icon: "◌" },
          { label: "Give to COD", icon: "◉" },
          { label: "Alumni Network", icon: "◎" },
          { label: "Media Relations", icon: "◈" },
          { label: "Directions & Parking", icon: "◷" },
        ],
      },
    },
  },
];

const topLinks = ["Community", "Alumni", "Current Students", "Faculty & Staff"];

export default function Navbar() {
  const [activeNav, setActiveNav] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setActiveNav(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveNav(null), 100);
  };

  const activeItem = navItems.find((n) => n.label === activeNav);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        * { box-sizing: border-box; }
        .nav-root { font-family: 'DM Sans', sans-serif; }

        /* THE STRETCH EFFECT: grid-template-rows 0fr -> 1fr */
        .stretch-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.15, 1);
        }
        .stretch-panel.is-open {
          grid-template-rows: 1fr;
        }
        .stretch-inner {
          overflow: hidden;
        }

        /* Content fade-in after stretch */
        .panel-content {
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.2s ease 0.15s, transform 0.2s ease 0.15s;
        }
        .is-open .panel-content {
          opacity: 1;
          transform: translateY(0);
        }

        .nav-btn {
          position: relative;
          overflow: hidden;
        }
        .nav-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2.5px;
          background: #1a5c2a;
          border-radius: 2px 2px 0 0;
          transition: width 0.22s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-btn:hover::after,
        .nav-btn.active::after { width: 60%; }

        .mega-link {
          position: relative;
          padding-bottom: 10px;
          border-bottom: 1px solid #e8f0eb;
        }
        .mega-link:last-child { border-bottom: none; }
        .mega-link::before {
          content: '';
          position: absolute;
          left: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: #1a5c2a;
          border-radius: 2px;
          transition: height 0.18s ease;
        }
        .mega-link:hover::before { height: 16px; }

        .cta-item {
          transition: transform 0.18s ease;
        }
        .cta-item:hover { transform: translateX(5px); }

        .chevron-icon {
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
        }
        .chevron-icon.rotated { transform: rotate(180deg); }
      `}</style>

      <div className="nav-root">

        {/* ── Top utility bar ── */}
        <div style={{ background: '#1b5e2b' }}>
          <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between" style={{ height: 38 }}>
            <nav className="flex items-center gap-6">
              {topLinks.map((l) => (
                <a key={l} href="#"
                  style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.04em', color: '#a5d6b2' }}
                  className="hover:text-white transition-colors duration-150">
                  {l}
                </a>
              ))}
              <button
                style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.04em', color: '#a5d6b2' }}
                className="hover:text-white transition-colors flex items-center gap-1">
                Quick Links
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </nav>
            <div className="flex items-center gap-2">
              {["Visit", "Apply"].map((b) => (
                <a key={b} href="#"
                  className="transition-all duration-200 hover:bg-white hover:text-[#1b5e2b]"
                  style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#d1f0da', fontSize: 11, fontWeight: 600, padding: '2px 14px', borderRadius: 100, letterSpacing: '0.05em' }}>
                  {b}
                </a>
              ))}
              <a href="#"
                className="transition-all duration-200 hover:bg-green-50"
                style={{ background: '#fff', color: '#1b5e2b', fontSize: 11, fontWeight: 700, padding: '2px 14px', borderRadius: 100, letterSpacing: '0.05em' }}>
                Give
              </a>
            </div>
          </div>
        </div>

        {/* ── Main nav ── */}
        <nav
          style={{ background: '#fff', borderBottom: activeNav ? '0px' : '1px solid #e8ede9' }}
          className="relative z-40"
          onMouseLeave={handleMouseLeave}
        >
          {/* Brand + links */}
          <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between" style={{ height: 70 }}>

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 flex-shrink-0">
              <div style={{ width: 42, height: 42, background: '#1b5e2b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
                  <path d="M13 2L3 9v14h7V16h6v7h7V9L13 2Z" fill="white" opacity="0.95"/>
                  <rect x="10" y="16" width="6" height="7" fill="rgba(0,0,0,0.15)" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Serif Display', serif", color: '#1b5e2b', fontSize: '1.2rem', lineHeight: 1.1 }}>
                  College of DuPage
                </div>
                <div style={{ fontSize: 9.5, letterSpacing: '0.18em', color: '#9ab09f', fontWeight: 500, marginTop: 2 }}>
                  GLEN ELLYN · ILLINOIS
                </div>
              </div>
            </a>

            {/* Nav items */}
            <div className="hidden lg:flex items-stretch" style={{ height: 70 }}>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  className={`nav-btn ${activeNav === item.label ? 'active' : ''}`}
                  style={{
                    padding: '0 20px',
                    fontSize: 13.5,
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    color: activeNav === item.label ? '#1b5e2b' : '#3d5244',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    height: '100%',
                    transition: 'color 0.15s ease',
                  }}
                >
                  {item.label}
                  <svg
                    className={`chevron-icon ${activeNav === item.label ? 'rotated' : ''}`}
                    width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-0.5">
              <button style={{ padding: '8px 10px', borderRadius: 8, color: '#5a7a63', background: 'none', border: 'none', cursor: 'pointer' }}
                className="hover:bg-green-50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
              <button style={{ padding: '8px 10px', borderRadius: 8, color: '#5a7a63', background: 'none', border: 'none', cursor: 'pointer' }}
                className="hover:bg-green-50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden"
              style={{ padding: 8, color: '#3d5244', background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => setMobileOpen(!mobileOpen)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>

          {/* ══ STRETCH MEGA PANEL ══ */}
          <div
            className={`stretch-panel ${activeNav ? 'is-open' : ''}`}
            onMouseEnter={() => clearTimeout(timeoutRef.current)}
            style={{ borderTop: activeNav ? '2px solid #1b5e2b' : 'none' }}
          >
            <div className="stretch-inner">
              <div style={{ background: 'linear-gradient(180deg, #f4f9f5 0%, #eef5ef 100%)' }}>
                {/* Always render all items but only show the active one */}
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="panel-content"
                    style={{ display: activeNav === item.label ? 'block' : 'none' }}
                  >
                    <div className="max-w-[1280px] mx-auto px-8 py-9">
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr 1px 1.4fr', gap: '0 40px', alignItems: 'start' }}>

                        {/* Col 1: Primary */}
                        <div>
                          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', color: '#89a892', textTransform: 'uppercase', marginBottom: 18 }}>
                            {item.label}
                          </div>
                          <div style={{ paddingLeft: 12 }}>
                            {item.mega.featured.map((link) => (
                              <a key={link.label} href={link.href}
                                className="mega-link"
                                style={{
                                  display: 'block',
                                  paddingTop: 10,
                                  fontSize: link.highlight ? 15 : 13.5,
                                  fontWeight: link.highlight ? 600 : 450,
                                  color: link.highlight ? '#1b5e2b' : '#3d5244',
                                  textDecoration: 'none',
                                  transition: 'color 0.15s',
                                }}>
                                {link.highlight
                                  ? <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                      <span style={{ color: '#1b5e2b', fontSize: 16 }}>→</span> {link.label}
                                    </span>
                                  : link.label}
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Divider */}
                        <div style={{ background: '#d4e5d7', height: '100%', minHeight: 160 }} />

                        {/* Col 2: Secondary */}
                        <div>
                          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', color: '#89a892', textTransform: 'uppercase', marginBottom: 18 }}>
                            Programs
                          </div>
                          <div style={{ paddingLeft: 12 }}>
                            {item.mega.secondary.map((link) => (
                              <a key={link.label} href={link.href}
                                className="mega-link"
                                style={{
                                  display: 'block',
                                  paddingTop: 10,
                                  fontSize: 13.5,
                                  fontWeight: 450,
                                  color: '#3d5244',
                                  textDecoration: 'none',
                                  transition: 'color 0.15s',
                                }}>
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Divider */}
                        <div style={{ background: '#d4e5d7', height: '100%', minHeight: 160 }} />

                        {/* Col 3: CTA card */}
                        <div>
                          <div
                            style={{
                              background: 'linear-gradient(145deg, #1b5e2b 0%, #2e7d42 50%, #1b5e2b 100%)',
                              borderRadius: 16,
                              padding: '24px 22px',
                            }}>
                            <div style={{ fontFamily: "'DM Serif Display', serif", color: '#fff', fontSize: '1.25rem', marginBottom: 18, lineHeight: 1.2 }}>
                              {item.mega.cta.title}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                              {item.mega.cta.links.map((cta) => (
                                <a key={cta.label} href="#"
                                  className="cta-item"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    padding: '8px 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                  }}>
                                  <span style={{
                                    width: 30, height: 30,
                                    background: 'rgba(255,255,255,0.13)',
                                    borderRadius: 8,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 15, flexShrink: 0, color: '#a7f3c0',
                                  }}>
                                    {cta.icon}
                                  </span>
                                  <span style={{ fontSize: 13, fontWeight: 500, color: '#c8ecd1', flex: 1 }}>
                                    {cta.label}
                                  </span>
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden" style={{ borderTop: '1px solid #e8ede9', background: '#fff' }}>
              {navItems.map((item) => (
                <div key={item.label} style={{ borderBottom: '1px solid #eef2ef' }}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 500, color: '#3d5244' }}>
                    {item.label}
                    <svg className={`chevron-icon ${mobileExpanded === item.label ? 'rotated' : ''}`}
                      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div style={{ padding: '4px 24px 16px', background: '#f4f9f5' }}>
                      {[...item.mega.featured, ...item.mega.secondary].map((link) => (
                        <a key={link.label} href={link.href}
                          style={{ display: 'block', padding: '8px 0', fontSize: 13, color: '#4a6b53', borderBottom: '1px solid #e0ece2', textDecoration: 'none' }}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>

        {/* Demo page content */}
        <div style={{
          minHeight: '70vh',
          background: 'linear-gradient(160deg, #f0f7f2 0%, #e8f4eb 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: 12,
        }}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.2rem', color: '#1b5e2b', lineHeight: 1.2, textAlign: 'center' }}>
            Hover a nav item above
          </div>
          <p style={{ fontSize: 14, color: '#7a9f82', letterSpacing: '0.04em', textAlign: 'center' }}>
            The navbar smoothly stretches open — no popup, no floating modal
          </p>
        </div>

      </div>
    </>
  );
}