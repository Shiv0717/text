"use client";

import { useRef, useState } from "react";

const students = [
  {
    name: "Anna Argemí",
    programme: "Màster en Química Analítica",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=560&fit=crop&crop=face",
  },
  {
    name: "Agustín Guerequiz",
    programme: "Màster en Gestió en Patrimonial y Financiera",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=560&fit=crop&crop=face",
  },
  {
    name: "Arnau Llaugé",
    programme: "Màster en Gestió Patrimonial y Financiera",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=560&fit=crop&crop=face",
  },
  {
    name: "Laura Sánchez",
    programme: "Màster en Enginyeria Química",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=560&fit=crop&crop=face",
  },
  {
    name: "Marc Puigdomènech",
    programme: "Màster en Direcció d'Empreses",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=560&fit=crop&crop=face",
  },
];

export default function IQSStudentsSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  };

  return (
    <section className="bg-[#f0f0ee] py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left: Text block */}
          <div className="lg:w-[340px] flex-shrink-0 flex flex-col justify-center">
            {/* Label */}
            <div className="flex items-center gap-2 mb-5">
              {/* IQS chevron icon */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 14L9 4L16 14" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span
                className="text-sm font-semibold tracking-wide text-[#1a1a3a]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                IQS Experiences
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[#0f1f4b] font-bold leading-tight mb-6"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              }}
            >
              Meet our students
            </h2>

            {/* Body */}
            <p
              className="text-[#444] leading-relaxed text-[0.97rem]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              At IQS, each student is a story of motivation, dedication, and
              success. Through their experiences, you&apos;ll be able to get a
              more accurate view on the programmes, the subjects taught, and the
              professional impact it has on students.
            </p>
          </div>

          {/* Right: Scrollable cards */}
          <div className="flex-1 min-w-0">
            <div
              ref={scrollRef}
              onScroll={updateScrollState}
              className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {students.map((s, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-[260px] h-[380px] rounded-2xl overflow-hidden group cursor-pointer"
                >
                  {/* Photo */}
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Name + programme */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p
                      className="text-white font-semibold text-lg leading-tight mb-1"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {s.name}
                    </p>
                    <p className="text-white/75 text-sm leading-snug">
                      {s.programme}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-7">
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 border border-[#1a1a3a] rounded-full text-[#1a1a3a] text-sm font-medium hover:bg-[#1a1a3a] hover:text-white transition-all duration-200"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                See more experiences
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    canScrollLeft
                      ? "border-[#1a1a3a] text-[#1a1a3a] hover:bg-[#1a1a3a] hover:text-white"
                      : "border-[#ccc] text-[#ccc] cursor-not-allowed"
                  }`}
                  aria-label="Previous"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    canScrollRight
                      ? "border-[#1a1a3a] text-[#1a1a3a] hover:bg-[#1a1a3a] hover:text-white"
                      : "border-[#ccc] text-[#ccc] cursor-not-allowed"
                  }`}
                  aria-label="Next"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}