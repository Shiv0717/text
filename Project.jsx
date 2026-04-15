"use client";

import { useState } from "react";

const companies = [
  { name: "Google",     hq: "Mountain View", color: "#4285F4", domain: "google.com" },
  { name: "Apple",      hq: "Cupertino",     color: "#555555", domain: "apple.com" },
  { name: "Microsoft",  hq: "Redmond",       color: "#00A4EF", domain: "microsoft.com" },
  { name: "Amazon",     hq: "Seattle",       color: "#FF9900", domain: "amazon.com" },
  { name: "Meta",       hq: "Menlo Park",    color: "#0082FB", domain: "meta.com" },
  { name: "Accenture",  hq: "Dublin",        color: "#A100FF", domain: "accenture.com" },
  { name: "Infosys",    hq: "Bengaluru",     color: "#007CC3", domain: "infosys.com" },
  { name: "TCS",        hq: "Mumbai",        color: "#CC0000", domain: "tcs.com" },
  { name: "Wipro",      hq: "Bengaluru",     color: "#341C5C", domain: "wipro.com" },
  { name: "IBM",        hq: "Armonk",        color: "#1F70C1", domain: "ibm.com" },
  { name: "Oracle",     hq: "Austin",        color: "#C74634", domain: "oracle.com" },
  { name: "Samsung",    hq: "Seoul",         color: "#1428A0", domain: "samsung.com" },
];

const rows = [
  companies.slice(0, 5),
  companies.slice(5, 9),
  companies.slice(9, 12),
];

export default function RecruitmentLogos() {
  const [hovered, setHovered] = useState(null);

  return (
    <section>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500&display=swap');

        :root {
          --bg: #F7F4EF;
          --ink: #1C1917;
          --muted: #A8A39B;
          --rule: #E2DDD6;
          --warm: #EDE8E0;
        }

        .rp-wrap {
          background: var(--bg);
          padding: 100px 48px 80px;
          overflow: hidden;
          position: relative;
        }

        /* Subtle noise texture overlay */
        .rp-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }

        .rp-inner {
          max-width: 1020px;
          margin: 0 auto;
          position: relative;
        }

        /* Header */
        .rp-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 64px;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--rule);
        }

        .rp-title-block {}

        .rp-label {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 10px;
        }

        .rp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 300;
          color: var(--ink);
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .rp-title em {
          font-style: italic;
          font-weight: 400;
          color: var(--muted);
        }

        .rp-stat {
          text-align: right;
        }

        .rp-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 80px;
          font-weight: 300;
          color: var(--rule);
          line-height: 1;
          letter-spacing: -0.05em;
          display: block;
        }

        .rp-stat-label {
          font-family: 'Outfit', sans-serif;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* Pyramid grid */
        .rp-pyramid {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .rp-row {
          display: flex;
          justify-content: center;
          border-top: 1px solid var(--rule);
        }

        .rp-pyramid .rp-row:last-child {
          border-bottom: 1px solid var(--rule);
        }

        .rp-cell {
          flex: 1;
          padding: 32px 24px 28px;
          border-right: 1px solid var(--rule);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: default;
          position: relative;
          overflow: hidden;
          transition: background 0.35s ease;
        }

        .rp-cell:first-child {
          border-left: 1px solid var(--rule);
        }

        /* Accent bar at top of cell */
        .rp-cell-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rp-cell:hover .rp-cell-bar {
          transform: scaleX(1);
        }

        .rp-cell:hover {
          background: var(--warm);
        }

        .rp-cell-idx {
          font-family: 'Outfit', sans-serif;
          font-size: 9px;
          font-weight: 400;
          color: var(--rule);
          letter-spacing: 0.1em;
          transition: color 0.2s ease;
          align-self: flex-end;
          position: absolute;
          top: 14px;
          right: 16px;
        }

        .rp-cell:hover .rp-cell-idx {
          color: var(--muted);
        }

        .rp-cell-logo {
          width: 32px;
          height: 32px;
          object-fit: contain;
          opacity: 0.75;
          transition: opacity 0.2s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: grayscale(30%);
        }

        .rp-cell:hover .rp-cell-logo {
          opacity: 1;
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        .rp-cell-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 2.2vw, 28px);
          font-weight: 400;
          color: var(--ink);
          letter-spacing: -0.01em;
          line-height: 1;
          text-align: center;
          transition: color 0.2s ease;
        }

        .rp-cell-hq {
          font-family: 'Outfit', sans-serif;
          font-size: 9px;
          font-weight: 300;
          color: transparent;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          transition: color 0.25s ease, transform 0.3s ease;
          transform: translateY(4px);
        }

        .rp-cell:hover .rp-cell-hq {
          color: var(--muted);
          transform: translateY(0);
        }

        /* Footer */
        .rp-footer {
          margin-top: 36px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .rp-footer-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--rule);
          flex-shrink: 0;
        }

        .rp-footer-text {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .rp-footer-line {
          flex: 1;
          height: 1px;
          background: var(--rule);
        }

        .rp-footer-year {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-style: italic;
          color: var(--rule);
        }

        /* Staggered entrance animation */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .rp-cell {
          animation: fadeUp 0.5s ease both;
        }

        ${companies.map((_, i) => `.rp-cell:nth-child(${i + 1}) { animation-delay: ${i * 60}ms; }`).join('\n')}

        @media (max-width: 640px) {
          .rp-wrap { padding: 64px 24px; }
          .rp-header { flex-direction: column; align-items: flex-start; gap: 12px; }
          .rp-stat { text-align: left; }
          .rp-cell { padding: 22px 12px 20px; }
        }
      `}</style>

      <div className="rp-wrap">
        <div className="rp-inner">

          <div className="rp-header">
            <div className="rp-title-block">
              <div className="rp-label">Where our talent lands</div>
              <div className="rp-title">Recruitment <em>partners</em></div>
            </div>
            <div className="rp-stat">
              <span className="rp-stat-num">12</span>
              <span className="rp-stat-label">Partner companies</span>
            </div>
          </div>

          <div className="rp-pyramid">
            {rows.map((row, ri) => (
              <div className="rp-row" key={ri}>
                {row.map((c, ci) => {
                  const globalIdx = rows.slice(0, ri).reduce((a, r) => a + r.length, 0) + ci;
                  return (
                    <div
                      className="rp-cell"
                      key={c.name}
                      onMouseEnter={() => setHovered(c.name)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div
                        className="rp-cell-bar"
                        style={{ background: c.color }}
                      />
                      <span className="rp-cell-idx">{String(globalIdx + 1).padStart(2, "0")}</span>
                      <img
                        className="rp-cell-logo"
                        src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=64`}
                        alt={c.name}
                        width={32}
                        height={32}
                      />
                      <span className="rp-cell-name">{c.name}</span>
                      <span className="rp-cell-hq">{c.hq}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="rp-footer">
            <div className="rp-footer-dot" />
            <span className="rp-footer-text">Actively placing talent</span>
            <div className="rp-footer-line" />
            <span className="rp-footer-year">2024 — present</span>
          </div>

        </div>
      </div>
    </section>
  );
}