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
  { name: "IBM", hq: "Armonk" },
  { name: "Oracle", hq: "Austin" },
  { name: "Samsung", hq: "Seoul" },
];

const rows = [
  companies.slice(0, 5),
  companies.slice(5, 9),
  companies.slice(9, 12),
];

export default function RecruitmentLogos() {
  return (
    <section>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Instrument+Serif:ital@0;1&display=swap');

        .pyr-section {
          background: #fff;
          padding: 96px 0;
          font-family: 'Syne', sans-serif;
        }

        .pyr-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .pyr-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #bbb;
          margin-bottom: 56px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .pyr-eyebrow::before,
        .pyr-eyebrow::after {
          content: '';
          display: block;
          height: 1px;
          width: 40px;
          background: #e0e0e0;
        }

        .pyr-rows {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .pyr-row {
          display: flex;
          justify-content: center;
          width: 100%;
          border-top: 1px solid #ebebeb;
        }

        .pyr-rows .pyr-row:last-child {
          border-bottom: 1px solid #ebebeb;
        }

        .pyr-item {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 4px;
          padding: 28px 16px;
          border-right: 1px solid #ebebeb;
          cursor: default;
          transition: background 0.2s ease;
          position: relative;
        }

        .pyr-item:first-child {
          border-left: 1px solid #ebebeb;
        }

        .pyr-item:hover {
          background: #fafafa;
        }

        .pyr-item:hover .pyr-name {
          color: #000;
        }

        .pyr-item:hover .pyr-hq {
          opacity: 1;
          transform: translateY(0);
        }

        .pyr-index {
          font-family: 'Syne', sans-serif;
          font-size: 9px;
          font-weight: 400;
          color: #d0d0d0;
          letter-spacing: 0.1em;
          margin-bottom: 2px;
        }

        .pyr-name {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(18px, 2.4vw, 30px);
          font-weight: 400;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          line-height: 1;
          transition: color 0.2s ease;
          text-align: center;
        }

        .pyr-hq {
          font-family: 'Syne', sans-serif;
          font-size: 9px;
          font-weight: 400;
          color: #bbb;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          margin-top: 4px;
        }

        .pyr-footer {
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pyr-footer-text {
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ccc;
        }

        .pyr-footer-num {
          font-family: 'Instrument Serif', serif;
          font-size: 72px;
          font-weight: 400;
          color: #f0f0f0;
          line-height: 1;
          letter-spacing: -0.04em;
          font-style: italic;
        }
      `}</style>

      <div className="pyr-section">
        <div className="pyr-inner">
          <div className="pyr-eyebrow">Recruitment partners</div>

          <div className="pyr-rows">
            {rows.map((row, ri) => (
              <div className="pyr-row" key={ri}>
                {row.map((c, i) => (
                  <div className="pyr-item" key={c.name}>
                    <span className="pyr-index">
                      {String(rows.slice(0, ri).reduce((a, r) => a + r.length, 0) + i + 1).padStart(2, "0")}
                    </span>
                    <span className="pyr-name">{c.name}</span>
                    <span className="pyr-hq">{c.hq}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="pyr-footer">
            <span className="pyr-footer-text">Actively hiring — 2024</span>
            <span className="pyr-footer-num">12</span>
          </div>
        </div>
      </div>
    </section>
  );
}