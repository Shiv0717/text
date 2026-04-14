"use client";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "University Teaching",
    subtitle: "Dept. (UTD) UG/Diploma",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 14h32" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 20h16M12 26h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#6366f1",
    tag: "Academics",
  },
  {
    id: 2,
    title: "Results",
    subtitle: "Reg / Supply / RT / RV & RRV",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M8 36V10a2 2 0 012-2h20a2 2 0 012 2v26l-6-4-6 4-6-4-6 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 16h12M14 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#10b981",
    tag: "Exams",
  },
  {
    id: 3,
    title: "Examination",
    subtitle: "Time Table",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="8" width="28" height="26" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 16h28" stroke="currentColor" strokeWidth="2"/>
        <path d="M13 6v4M27 6v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="24" r="2" fill="currentColor"/>
        <circle cx="20" cy="24" r="2" fill="currentColor"/>
        <circle cx="26" cy="24" r="2" fill="currentColor"/>
      </svg>
    ),
    accent: "#f59e0b",
    tag: "Schedule",
  },
  {
    id: 4,
    title: "Syllabus",
    subtitle: "Curriculum & Course Content",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M10 6h20a2 2 0 012 2v24a2 2 0 01-2 2H10a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 14h12M14 20h12M14 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#3b82f6",
    tag: "Academics",
  },
  {
    id: 5,
    title: "Academic Calendar",
    subtitle: "Events & Important Dates",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="8" width="28" height="26" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 16h28" stroke="currentColor" strokeWidth="2"/>
        <path d="M13 6v4M27 6v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M13 23l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#8b5cf6",
    tag: "Schedule",
  },
  {
    id: 6,
    title: "Enrollment Form",
    subtitle: "Student Registration",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M10 6h20a2 2 0 012 2v24a2 2 0 01-2 2H10a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 14h12M14 20h12M14 26h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="29" cy="29" r="6" fill="#8b5cf6" stroke="white" strokeWidth="2"/>
        <path d="M26 29h6M29 26v6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#ec4899",
    tag: "Admin",
  },
  {
    id: 7,
    title: "Examination Form",
    subtitle: "Fill & Submit Online",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M10 6h20a2 2 0 012 2v24a2 2 0 01-2 2H10a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 16h5M14 22h12M14 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 13l4 4-8 8H14v-4l8-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#14b8a6",
    tag: "Exams",
  },
  {
    id: 8,
    title: "Notices",
    subtitle: "Circulars & Announcements",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 6l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#f97316",
    tag: "Info",
  },
  {
    id: 9,
    title: "Skill Development",
    subtitle: "Informal Education",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M26 20l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#06b6d4",
    tag: "Development",
  },
  {
    id: 10,
    title: "UTD Department",
    subtitle: "University Teaching Dept.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M6 34V18l14-10 14 10v16H6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M15 34v-8h10v8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#a855f7",
    tag: "Academics",
  },
  {
    id: 11,
    title: "Placement Cell",
    subtitle: "Centralized CPC",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="10" y="14" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M15 14v-3a2 2 0 012-2h6a2 2 0 012 2v3" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 22v-4M17 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#22c55e",
    tag: "Career",
  },
  {
    id: 12,
    title: "Grievance Cell",
    subtitle: "Feedback & Complaints",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M8 8h24a2 2 0 012 2v16a2 2 0 01-2 2H22l-6 6v-6H8a2 2 0 01-2-2V10a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 18h12M14 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#ef4444",
    tag: "Support",
  },
];

const tagColors = {
  Academics: "bg-indigo-100 text-indigo-700",
  Exams: "bg-emerald-100 text-emerald-700",
  Schedule: "bg-amber-100 text-amber-700",
  Admin: "bg-pink-100 text-pink-700",
  Info: "bg-orange-100 text-orange-700",
  Development: "bg-cyan-100 text-cyan-700",
  Career: "bg-green-100 text-green-700",
  Support: "bg-red-100 text-red-700",
};

const allTags = ["All", ...Array.from(new Set(cards.map((c) => c.tag)))];

export default function UniversityPortal() {
  const [activeTag, setActiveTag] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = activeTag === "All" ? cards : cards.filter((c) => c.tag === activeTag);

  return (
    <div
      className="min-h-screen bg-gray-50 text-gray-900 font-sans"
      style={{ fontFamily: "'DM Sans', 'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .card-glow { transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .card-glow:hover { transform: translateY(-4px); }
        .shimmer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(0,0,0,0.02) 50%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .shimmer:hover::before { opacity: 1; }
        .tag-pill { transition: all 0.2s ease; }
        .tag-pill:hover { transform: scale(1.05); }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.5s ease forwards; }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[3px] rounded-full bg-indigo-600" />
            <span className="text-xs tracking-[0.2em] uppercase text-indigo-600 font-medium">
              CSDIE — Student Portal
            </span>
          </div>
          <h1 className="syne text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
            Courses Under CSDIE
          </h1>
          <p className="text-sm text-gray-500 max-w-md">
            Access all academic resources, examination portals, and student services from one unified dashboard.
          </p>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`tag-pill px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                activeTag === tag
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-200"
                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((card, i) => (
            <button
              key={card.id}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="fade-up relative group text-left rounded-2xl bg-white border border-gray-200 p-5 card-glow shimmer overflow-hidden cursor-pointer shadow-sm"
              style={{
                animationDelay: `${i * 40}ms`,
                boxShadow:
                  hoveredId === card.id
                    ? `0 0 0 1px ${card.accent}55, 0 12px 40px ${card.accent}22`
                    : "none",
                borderColor: hoveredId === card.id ? `${card.accent}44` : undefined,
              }}
            >
              {/* Glow blob */}
              <div
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ background: card.accent }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                style={{
                  background: hoveredId === card.id ? `${card.accent}15` : "#f3f4f6",
                  color: hoveredId === card.id ? card.accent : "#6b7280",
                }}
              >
                {card.icon}
              </div>

              {/* Text */}
              <p className="text-sm font-semibold text-gray-900 leading-snug mb-1">{card.title}</p>
              <p className="text-[11px] text-gray-400 leading-tight mb-3">{card.subtitle}</p>

              {/* Tag */}
              <span
                className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full ${tagColors[card.tag] || "bg-gray-100 text-gray-600"}`}
              >
                {card.tag}
              </span>

              {/* Arrow */}
              <div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0"
                style={{ color: card.accent }}
              >
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-10">
          Chhattisgarh Swami Vivekanand Technical University · csvtu.ac.in
        </p>
      </div>
    </div>
  );
}