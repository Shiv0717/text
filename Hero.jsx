"use client";


import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Dr. Meera Krishnamurthy",
    role: "Professor, Computer Science",
    text: "The university's focus on practical learning and industry collaboration has transformed our curriculum. Students are graduating with exceptional skills.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    name: "Arjun Nair",
    role: "B.Tech Final Year",
    text: "The research opportunities and mentorship here are outstanding. I've published two papers and secured a great placement thanks to the faculty.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Prof. Sanjay Verma",
    role: "Dean, School of Business",
    text: "Our alumni network and academic rigor make this institution a benchmark for excellence. Proud to be part of this community.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    name: "Neha Sharma",
    role: "PhD Scholar, Mathematics",
    text: "The library resources and research facilities are world-class. My journey here has been intellectually enriching and transformative.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Vikram Singh",
    role: "Director, International Affairs",
    text: "Global partnerships and exchange programs have put our university on the world map. The diversity on campus is incredible.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Priya Patel",
    role: "Alumna, Batch of 2023",
    text: "The skills and network I gained here launched my career. I'm now working at a top tech firm, all thanks to the university's training.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  },
];

export default function TestimonialsSection() {
  // Create slides that show 4 items at once (2 profiles + 2 testimonials)
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push({
      leftProfile: testimonials[i],
      testimonial1: testimonials[i],
      testimonial2: testimonials[(i + 1) % testimonials.length],
      rightProfile: testimonials[(i + 1) % testimonials.length],
    });
  }

  return (
    <section className="bg-gradient-to-br from-white via-[#F8F9FC] to-white max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="border-x border-[#1E2A5E]/20">
        <div className="flex items-center justify-between border-b border-[#1E2A5E]/20">
          {/* Left */}
          <div className="p-10 md:p-16">
            <p className="text-xs tracking-[0.2em] uppercase text-[#1E2A5E] mb-4 font-semibold">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#0A1435] max-w-sm">
              Voices from Our <span className="text-[#1E2A5E]">University</span> Community
            </h2>
          </div>

          {/* Right */}
          <div className="p-10 md:p-16 mt-6">
            <p className="text-[#3A4A6E] max-w-md leading-relaxed">
              From distinguished faculty to accomplished alumni and current students — hear what our community says about their journey at our institution.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Swiper */}
      <div className="border-x border-[#1E2A5E]/20">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          allowTouchMove={true}
          spaceBetween={0}
          slidesPerView={1}
          className="testimonials-swiper"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              {/* Use odd/even logic - even index (0,2,4...) = original, odd index (1,3,5...) = reverse */}
              {idx % 2 === 0 ? (
                // Original Layout for even slides
                <div className="grid md:grid-cols-4">
                  {/* Left Profile */}
                  <div className="flex bg-gradient-to-b from-[#F8F9FC] to-white flex-col items-center justify-center p-8 md:p-10 border-r border-[#1E2A5E]/20 min-h-[400px]">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-[#1E2A5E]/20 relative shadow-lg">
                      <img
                        src={slide.leftProfile.image}
                        alt={slide.leftProfile.name}
                        
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 96px"
                      />
                    </div>
                    <div className="flex gap-1 text-[#FBBF24] text-lg mb-3">
                      ★ ★ ★ ★ ★
                    </div>
                    <p className="text-xs text-[#1E2A5E]/60 font-medium uppercase tracking-wide">Trusted Voice</p>
                  </div>

                  {/* Testimonial 1 */}
                  <div className="p-8 md:p-10 border-r border-[#1E2A5E]/20 flex flex-col justify-between min-h-[400px] bg-white hover:bg-[#F8F9FC] transition-colors duration-300">
                    <p className="text-lg text-[#2A3A60] leading-relaxed mb-8">
                      "{slide.testimonial1.text}"
                    </p>
                    <div>
                      <p className="font-bold text-[#0A1435] text-lg">{slide.testimonial1.name}</p>
                      <p className="text-sm text-[#1E2A5E]/70 mt-1">{slide.testimonial1.role}</p>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="p-8 md:p-10 border-r border-[#1E2A5E]/20 flex flex-col justify-between min-h-[400px] bg-white hover:bg-[#F8F9FC] transition-colors duration-300">
                    <p className="text-lg text-[#2A3A60] leading-relaxed mb-8">
                      "{slide.testimonial2.text}"
                    </p>
                    <div>
                      <p className="font-bold text-[#0A1435] text-lg">{slide.testimonial2.name}</p>
                      <p className="text-sm text-[#1E2A5E]/70 mt-1">{slide.testimonial2.role}</p>
                    </div>
                  </div>

                  {/* Right Profile */}
                  <div className="flex flex-col items-center justify-center p-8 md:p-10 bg-gradient-to-t from-[#F8F9FC] to-white min-h-[400px]">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-[#1E2A5E]/20 relative shadow-lg">
                      <img
                        src={slide.rightProfile.image}
                        alt={slide.rightProfile.name}
                      
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 96px"
                      />
                    </div>
                    <div className="flex gap-1 text-[#FBBF24] text-lg mb-3">
                      ★ ★ ★ ★ ★
                    </div>
                    <p className="text-xs text-[#1E2A5E]/60 font-medium uppercase tracking-wide">Community Star</p>
                  </div>
                </div>
              ) : (
                // Reverse Layout for odd slides
                <div className="grid md:grid-cols-4">
                  {/* Right Profile - now first */}
                  <div className="flex flex-col items-center justify-center p-8 md:p-10 bg-gradient-to-t from-[#F8F9FC] to-white border-r border-[#1E2A5E]/20 min-h-[400px]">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-[#1E2A5E]/20 relative shadow-lg">
                      <img
                        src={slide.rightProfile.image}
                        alt={slide.rightProfile.name}
                       
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 96px"
                      />
                    </div>
                    <div className="flex gap-1 text-[#FBBF24] text-lg mb-3">
                      ★ ★ ★ ★ ★
                    </div>
                    <p className="text-xs text-[#1E2A5E]/60 font-medium uppercase tracking-wide">Community Star</p>
                  </div>

                  {/* Testimonial 2 - now second */}
                  <div className="p-8 md:p-10 border-r border-[#1E2A5E]/20 flex flex-col justify-between min-h-[400px] bg-white hover:bg-[#F8F9FC] transition-colors duration-300">
                    <p className="text-lg text-[#2A3A60] leading-relaxed mb-8">
                      "{slide.testimonial2.text}"
                    </p>
                    <div>
                      <p className="font-bold text-[#0A1435] text-lg">{slide.testimonial2.name}</p>
                      <p className="text-sm text-[#1E2A5E]/70 mt-1">{slide.testimonial2.role}</p>
                    </div>
                  </div>

                  {/* Testimonial 1 - now third */}
                  <div className="p-8 md:p-10 border-r border-[#1E2A5E]/20 flex flex-col justify-between min-h-[400px] bg-white hover:bg-[#F8F9FC] transition-colors duration-300">
                    <p className="text-lg text-[#2A3A60] leading-relaxed mb-8">
                      "{slide.testimonial1.text}"
                    </p>
                    <div>
                      <p className="font-bold text-[#0A1435] text-lg">{slide.testimonial1.name}</p>
                      <p className="text-sm text-[#1E2A5E]/70 mt-1">{slide.testimonial1.role}</p>
                    </div>
                  </div>

                  {/* Left Profile - now last */}
                  <div className="flex bg-gradient-to-b from-[#F8F9FC] to-white flex-col items-center justify-center p-8 md:p-10 min-h-[400px]">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-[#1E2A5E]/20 relative shadow-lg">
                      <img
                        src={slide.leftProfile.image}
                        alt={slide.leftProfile.name}
                     
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 96px"
                      />
                    </div>
                    <div className="flex gap-1 text-[#FBBF24] text-lg mb-3">
                      ★ ★ ★ ★ ★
                    </div>
                    <p className="text-xs text-[#1E2A5E]/60 font-medium uppercase tracking-wide">Trusted Voice</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom styles for swiper */}
      <style jsx global>{`
        .testimonials-swiper .swiper-wrapper {
          transition-timing-function: ease;
        }
        
        .testimonials-swiper {
          overflow: visible;
        }
        
        /* Smooth hover effects */
        .testimonials-swiper .swiper-slide {
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
}