

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
  return (
    <section className="bg-[#faf9f7] min-h-screen font-['Epilogue',sans-serif]">
      {/* ── Top header bar ── */}
      <div className="border-b border-neutral-200 px-8 md:px-16 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Crest mark */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 2L22 8V20L14 26L6 20V8Z" stroke="#1a1a1a" strokeWidth="1" fill="none"/>
            <circle cx="14" cy="14" r="3" fill="#1a1a1a"/>
          </svg>
          <span className="font-['Playfair_Display',serif] text-[15px] tracking-wide text-neutral-800">
            Harwick University
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-[12px] text-neutral-400 tracking-widest uppercase">
          <a href="#" className="hover:text-neutral-800 transition-colors">About</a>
          <a href="#" className="hover:text-neutral-800 transition-colors">Academics</a>
          <a href="#" className="text-neutral-900 border-b border-neutral-900 pb-0.5">Leadership</a>
          <a href="#" className="hover:text-neutral-800 transition-colors">Research</a>
        </nav>
      </div>

      {/* ── Main layout: sticky left + scroll right ── */}
      <div className="flex flex-col md:flex-row">

        {/* ════ LEFT — sticky panel ════ */}
        <div className="md:w-[42%] md:sticky md:top-0 md:h-screen flex flex-col justify-between px-8 md:px-16 py-14">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-red-500 font-medium mb-4">
              University Leadership
            </p>
            <h1 className="font-['Playfair_Display',serif] text-[38px] md:text-[48px] leading-[1.12] text-neutral-900 mb-6">
              The people who<br />shape our future
            </h1>
            <p className="text-[14px] text-neutral-400 leading-relaxed max-w-xs font-light">
              Scroll to explore the executive team driving Harwick's academic
              excellence, research mission, and global vision.
            </p>
          </div>

          {/* Decorative index dots */}
          <div className="hidden md:flex flex-col gap-2 mt-auto pt-16">
            {leaders.map((l, i) => (
              <div key={i} className="flex items-center gap-3 group cursor-pointer">
                <span className="w-5 h-px bg-neutral-300 group-hover:w-8 group-hover:bg-neutral-700 transition-all duration-300" />
                <span className="text-[11px] tracking-widest uppercase text-neutral-300 group-hover:text-neutral-600 transition-colors">
                  {l.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Est. mark */}
          <p className="hidden md:block text-[10px] text-neutral-300 tracking-[0.15em] uppercase mt-8">
            Est. 1842 · Oxford, England
          </p>
        </div>

        {/* ════ RIGHT — scrolling cards ════ */}
        <div className="md:w-[58%] flex flex-col divide-y divide-neutral-100">
          {leaders.map((leader, idx) => (
            <article
              key={idx}
              className="group px-8 md:px-12 py-14 md:py-20 hover:bg-white transition-colors duration-500"
            >
              {/* Tag */}
              <p className="text-[10px] tracking-[0.2em] uppercase text-red-500 font-medium mb-5">
                {leader.tag}
              </p>

              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-8 bg-neutral-100">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-[1.02]"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Name & title */}
              <h2 className="font-['Playfair_Display',serif] text-[28px] md:text-[34px] text-neutral-900 leading-tight mb-1">
                {leader.name}
              </h2>
              <p className="text-[12px] tracking-widest uppercase text-neutral-400 mb-5 font-light">
                {leader.title}
              </p>

              {/* Bio */}
              <p className="text-[14px] text-neutral-500 leading-[1.8] font-light max-w-lg mb-8">
                {leader.bio}
              </p>

              {/* Stats row */}
              <div className="flex gap-10 border-t border-neutral-100 pt-6">
                <div>
                  <p className="font-['Playfair_Display',serif] text-[22px] text-neutral-900">
                    {leader.stat1.val}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-0.5">
                    {leader.stat1.label}
                  </p>
                </div>
                <div>
                  <p className="font-['Playfair_Display',serif] text-[22px] text-neutral-900">
                    {leader.stat2.val}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-0.5">
                    {leader.stat2.label}
                  </p>
                </div>
                {/* Read more */}
                <div className="ml-auto flex items-end">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[12px] text-neutral-400 hover:text-neutral-900 transition-colors group/link tracking-wide"
                  >
                    Full profile
                    <span className="inline-block translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* Footer spacer */}
          <div className="px-8 md:px-12 py-12 text-[11px] text-neutral-300 tracking-widest uppercase">
            Harwick University · Leadership Directory
          </div>
        </div>
      </div>
    </section>
  );
}