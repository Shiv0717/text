"use client";

import { useState } from "react";
import { GraduationCap, Building2, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Ranked #1 in Research Innovation among national universities",
    body: "Our groundbreaking research in AI and sustainable technology has attracted over $50M in research grants, positioning us as a global leader in innovation.",
    name: "Dr. James Wilson",
    location: "Research Excellence Award 2024",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
  },
  {
    quote: "95% Graduate Employment Rate within 6 months",
    body: "Our career-focused curriculum and industry partnerships ensure graduates are job-ready, with top companies recruiting from our campus year after year.",
    name: "Dr. Emily Chen",
    location: "Career Development Achievement 2024",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="bg-[#f8f8f6] py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">University Achievements 2024</h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto leading-relaxed">
            Recognized globally for academic excellence, research breakthroughs, and student success
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4">

          {/* Stats Column */}
          <div className="flex flex-col gap-4">

            {/* Stat Card 1 */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="text-4xl font-bold text-gray-900">
                50k<span className="text-blue-500">+</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">Graduates worldwide</p>
              <div className="mt-4 flex justify-end">
                <div className="w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center">
                  <GraduationCap size={16} className="text-blue-500" />
                </div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="text-4xl font-bold text-gray-900">
                #12<span className="text-blue-500"></span>
              </p>
              <p className="text-sm text-gray-400 mt-1">World University Ranking</p>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Top-ranked institution for research impact and academic reputation globally
              </p>
              <div className="mt-4 flex justify-end">
                <div className="w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center">
                  <Building2 size={16} className="text-blue-500" />
                </div>
              </div>
            </div>

          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">

              {/* Image */}
              <div className="relative min-h-[300px]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <p className="text-xl font-bold text-gray-900 leading-snug">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                    {t.body}
                  </p>
                </div>

                {/* Author + Nav */}
                <div className="flex items-end justify-between mt-8">
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.location}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-lg transition">
            Apply now
          </button>
        </div>

      </div> 
    </section>
  );
}