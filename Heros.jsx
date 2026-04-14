

const aboutLinks = [
  { label: "About Huble",        href: "#" },
  { label: "Careers",            href: "#" },
  { label: "Customer Stories",   href: "#" },
  { label: "Security & Compliance", href: "#" },
  { label: "Blog",               href: "#" },
  { label: "CRM Comparison",     href: "#" },
];

const offersLinks = [
  { label: "Hubspot Demo",        href: "#" },
  { label: "AI Utilization Review", href: "#" },
  { label: "HubSpot TOC Review", href: "#" },
];

const legalLinks = [
  { label: "Privacy Statement", href: "#" },
  { label: "Terms of use",      href: "#" },
  { label: "Cookie Notice",     href: "#" },
  { label: "Imprint",           href: "#" },
];

const ctaLinks = [
  { label: "New inquiry request",    href: "#" },
  { label: "Book a call with our team", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1f2e] text-white px-8 md:px-16 pt-16 pb-8">

      {/* ── Top section ── */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-12 border-b border-white/10">

        {/* Heading */}
        <div className="max-w-xs">
          <span className="text-white/50 text-lg mb-2 block">↘</span>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Let's work<br />together
          </h2>
        </div>

        {/* CTA links */}
        <div className="flex flex-col gap-0 w-full md:max-w-sm">
          {ctaLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center justify-between py-5 text-[15px] text-white/85 hover:text-white transition-colors duration-200 ${
                i < ctaLinks.length - 1 ? "border-b border-white/15" : ""
              }`}
            >
              <span>{link.label}</span>
              <span className="text-white/60 text-lg">→</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Bottom section ── */}
      <div className="mt-10 flex flex-col md:flex-row md:justify-between gap-10">

        {/* Nav columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8">

          {/* About */}
          <div>
            <p className="text-[13px] font-semibold text-white mb-4 tracking-wide">About</p>
            <ul className="space-y-2.5">
              {aboutLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] text-white/50 hover:text-white/90 transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offers */}
          <div>
            <p className="text-[13px] font-semibold text-white mb-4 tracking-wide">Offers</p>
            <ul className="space-y-2.5">
              {offersLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] text-white/50 hover:text-white/90 transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[13px] font-semibold text-white mb-4 tracking-wide">Legal</p>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] text-white/50 hover:text-white/90 transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column: extra links + socials */}
        <div className="flex flex-col justify-between items-start md:items-end gap-8">
          <div className="flex flex-col items-start md:items-end gap-2">
            <a href="#" className="text-[13px] text-white/50 hover:text-white/90 transition-colors duration-200">
              Security &amp; Compliance
            </a>
            <a href="#" className="text-[13px] text-white/50 hover:text-white/90 transition-colors duration-200">
              Huble Trust Center
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="mt-12 text-center">
        <p className="text-[12px] text-white/30">
          © 2025 Huble Digital All rights reserved
        </p>
      </div>

    </footer>
  );
}