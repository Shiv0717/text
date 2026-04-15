"use client";

const companies = [
  { name: "Google", hq: "Mountain View" },
  { name: "Amazon", hq: "Seattle" },
  { name: "Microsoft", hq: "Redmond" },
  { name: "TCS", hq: "Mumbai" },
  { name: "Infosys", hq: "Bengaluru" },
  { name: "Wipro", hq: "Bengaluru" },
  { name: "Accenture", hq: "Dublin" },
  { name: "Meta", hq: "Menlo Park" },
  { name: "Apple", hq: "Cupertino" },
];

export default function RecruitmentLogos() {
  return (
    <section>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Instrument+Serif:ital@0;1&display=swap');

        .ty-section {
          background: #fff;
          padding: 96px 0;
        }

        .ty-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .ty-eyebrow {
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #bbb;
          margin-bottom: 64px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .ty-eyebrow::after {
          content: '';
          display: block;
          height: 1px;
          width: 40px;
          background: #ddd;
        }

        .ty-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .ty-item {
          border-top: 1px solid #ebebeb;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 24px;
          padding: 18px 0;
          cursor: default;
          transition: padding-left 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .ty-item:last-child {
          border-bottom: 1px solid #ebebeb;
        }

        .ty-item:hover {
          padding-left: 14px;
        }

        .ty-item:hover .ty-name {
          color: #000;
        }

        .ty-item:hover .ty-hq {
          opacity: 1;
          transform: translateX(0);
        }

        .ty-item:hover .ty-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .ty-left {
          display: flex;
          align-items: baseline;
          gap: 20px;
          flex: 1;
        }

        .ty-index {
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          font-weight: 400;
          color: #ccc;
          letter-spacing: 0.08em;
          min-width: 20px;
        }

        .ty-name {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(28px, 4.5vw, 48px);
          font-weight: 400;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          line-height: 1;
          transition: color 0.2s ease;
        }

        .ty-hq {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #999;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ty-arrow {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          color: #1a1a1a;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ty-footer {
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ty-footer-text {
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ccc;
        }

        .ty-footer-num {
          font-family: 'Instrument Serif', serif;
          font-size: 72px;
          font-weight: 400;
          color: #f0f0f0;
          line-height: 1;
          letter-spacing: -0.04em;
          font-style: italic;
        }
      `}</style>

      <div className="ty-section">
        <div className="ty-inner">
          <div className="ty-eyebrow">Recruitment partners</div>

          <ul className="ty-list">
            {companies.map((c, i) => (
              <li className="ty-item" key={c.name}>
                <div className="ty-left">
                  <span className="ty-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ty-name">{c.name}</span>
                  <span className="ty-hq">{c.hq}</span>
                </div>
                <span className="ty-arrow">↗</span>
              </li>
            ))}
          </ul>

          <div className="ty-footer">
            <span className="ty-footer-text">Actively hiring — 2024</span>
            <span className="ty-footer-num">09</span>
          </div>
        </div>
      </div>
    </section>
  );
}