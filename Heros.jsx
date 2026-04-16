import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FlaskConical, 
  Trophy, 
  Lightbulb, 
  Globe, 
  GraduationCap,
  TrendingUp,
  ArrowDown
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    year: "2019",
    title: "Founded Research Lab",
    subtitle: "AI & Cognitive Sciences",
    description:
      "Established a state-of-the-art interdisciplinary research lab focused on machine learning applications in cognitive science, securing ₹4.2 Cr in initial funding.",
    stat: "₹4.2 Cr",
    statLabel: "Funding Secured",
    tag: "Research",
    accentColor: "#0ea5e9",
    icon: FlaskConical,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
  },
  {
    year: "2020",
    title: "National Ranking #3",
    subtitle: "Engineering & Technology",
    description:
      "Climbed to the top 3 in the National Institutional Ranking Framework (NIRF) for Engineering, recognising excellence in academics, research output, and placements.",
    stat: "#3",
    statLabel: "NIRF Rank",
    tag: "Rankings",
    accentColor: "#8b5cf6",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
  },
  {
    year: "2021",
    title: "500+ Patents Filed",
    subtitle: "Intellectual Property Milestone",
    description:
      "Crossed the 500 patent milestone, with innovations spanning semiconductor design, biomedical devices, and sustainable energy — placing us among India's top IP generators.",
    stat: "500+",
    statLabel: "Patents Filed",
    tag: "Innovation",
    accentColor: "#10b981",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
  },
  {
    year: "2022",
    title: "Global Partnerships",
    subtitle: "International Collaborations",
    description:
      "Signed MoUs with 40+ global universities including MIT, TU Munich, and NUS Singapore, enabling joint degrees, faculty exchange, and collaborative research grants.",
    stat: "40+",
    statLabel: "Partner Universities",
    tag: "Global",
    accentColor: "#ef4444",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=800&h=600&fit=crop",
  },
  {
    year: "2023",
    title: "₹100 Cr Placements",
    subtitle: "Career & Industry Excellence",
    description:
      "Achieved record placement season with 98% placement rate, cumulative offers crossing ₹100 Cr, and highest package of ₹2.8 Cr per annum from a Fortune 500 recruiter.",
    stat: "98%",
    statLabel: "Placement Rate",
    tag: "Placements",
    accentColor: "#f59e0b",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
  },
];

const CARD_HEIGHT = 480;
const PIN_TOP = 80;

export default function UniversityAchievements() {
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: `top ${PIN_TOP}px`,
          end: () => `+=${(cards.length - 1 - i) * (CARD_HEIGHT + 24)}`,
          pin: true,
          pinSpacing: false,
          onUpdate(self) {
            const progress = self.progress;
            const cardsOnTop = cards.length - 1 - i;
            const stackProgress = progress;

            gsap.set(card, {
              scale: 1 - cardsOnTop * stackProgress * 0.03,
              y: cardsOnTop * stackProgress * -15,
            });
          },
        });

        if (i > 0) {
          gsap.fromTo(
            card,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: `top ${PIN_TOP}px`,
                scrub: 0.5,
              },
            }
          );
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="bg-gray-50 font-sans min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={20} className="text-gray-400" />
            <span className="text-xs font-mono tracking-wider text-gray-400 uppercase">
              Timeline
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight m-0">
            Milestones that
            <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              define our journey
            </span>
          </h1>
          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-lg">
            Five years of breakthrough achievements in research, innovation, and global excellence.
          </p>
          
          {/* Scroll indicator */}
          <div className="mt-12 flex items-center gap-2 text-gray-300 text-xs">
            <ArrowDown size={14} />
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>

      {/* Cards stack */}
      <div className="max-w-6xl mx-auto px-6 pb-30 md:px-8">
        {achievements.map((a, i) => {
          const Icon = a.icon;
          return (
            <div
              key={a.year}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`${i === 0 ? "mt-0" : "mt-6"} will-change-transform origin-top`}
            >
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full" style={{ minHeight: CARD_HEIGHT }}>
                  
                  {/* Image Section */}
                  <div className="relative min-h-[300px] md:min-h-full overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-mono font-semibold px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-gray-900 shadow-sm">
                        {a.year}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <Icon size={28} strokeWidth={1.5} style={{ color: a.accentColor }} />
                        <span 
                          className="text-xs font-mono px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200"
                        >
                          {a.tag}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                        {a.title}
                      </h2>
                      
                      <p className="text-sm font-mono mb-4" style={{ color: a.accentColor }}>
                        {a.subtitle}
                      </p>
                      
                      <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {a.description}
                      </p>
                    </div>

                    <div className="flex items-end justify-between pt-6 border-t border-gray-100">
                      <div>
                        <p className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: a.accentColor }}>
                          {a.stat}
                        </p>
                        <p className="text-xs font-mono text-gray-400 mt-1 uppercase tracking-wider">
                          {a.statLabel}
                        </p>
                      </div>
                      
                      <div className="flex gap-1.5">
                        {achievements.map((_, di) => (
                          <div
                            key={di}
                            className={`h-0.5 transition-all duration-300 ${
                              di === i ? 'w-6' : 'w-3'
                            }`}
                            style={{
                              background: di === i ? a.accentColor : '#e5e7eb',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      
    </div>
  );
}