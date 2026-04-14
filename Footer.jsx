"use client";

import { useState } from "react";

import { GraduationCap, Building2, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Transformative environment fostering personal and academic growth",
    body: "Lorem ipsum dolor sit amet consectetur in in dignissim vulputate lectus enim diam placerat praesent diam nisl.",
    name: "Matt Cannon",
    location: "New York, NY",
    image: "/testimonials/matt.jpg",
  },
  {
    quote: "An incredible journey that shaped my career and future",
    body: "Lorem ipsum dolor sit amet consectetur in in dignissim vulputate lectus enim diam placerat praesent diam nisl.",
    name: "Sarah Johnson",
    location: "Los Angeles, CA",
    image: "/testimonials/sarah.jpg",
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
          <h2 className="text-4xl font-bold text-gray-900">What our students say</h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur in in dignissim
            vulputate lectus enim diam placerat praesent diam.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4">

          {/* Stats Column */}
          <div className="flex flex-col gap-4">

            {/* Stat Card 1 */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="text-4xl font-bold text-gray-900">
                100k<span className="text-red-500">+</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">Students graduated</p>
              <div className="mt-4 flex justify-end">
                <div className="w-8 h-8 bg-red-50 rounded-md flex items-center justify-center">
                  <GraduationCap size={16} className="text-red-500" />
                </div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="text-4xl font-bold text-gray-900">
                12<span className="text-red-500">+</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">Campus</p>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur in in dignissim
                vulputate lectus enim.
              </p>
              <div className="mt-4 flex justify-end">
                <div className="w-8 h-8 bg-red-50 rounded-md flex items-center justify-center">
                  <Building2 size={16} className="text-red-500" />
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
               
                  className="object-cover object-top"
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
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-lg transition">
            Enroll now
          </button>
        </div>

      </div> 
    </section>
  );
}