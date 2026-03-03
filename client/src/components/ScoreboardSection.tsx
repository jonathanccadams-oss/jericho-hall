/* ScoreboardSection — Live hall competition scoreboard with dramatic dark background */
import { useEffect, useRef, useState } from "react";

interface HallScore {
  name: string;
  shortName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  score: number;
  rank: number;
  categories: {
    label: string;
    score: number;
    max: number;
  }[];
  isJericho?: boolean;
  reigningChampion?: boolean;
  logo?: string;
}

const hallData: HallScore[] = [
  {
    name: "Malta",
    shortName: "MLT",
    color: "oklch(0.70 0.02 250)",
    bgColor: "oklch(0.15 0.03 250)",
    borderColor: "oklch(0.70 0.02 250 / 0.4)",
    score: 178,
    rank: 1,
    categories: [
      { label: "Athletics", score: 50, max: 100 },
      { label: "Academics", score: 63, max: 100 },
      { label: "Arts", score: 65, max: 100 },
    ],
    logo: "https://nsa.edu/wp-content/uploads/2024/01/malta-logo.png",
  },
  {
    name: "Jericho",
    shortName: "JER",
    color: "oklch(0.72 0.15 85)",
    bgColor: "oklch(0.18 0.07 148)",
    borderColor: "oklch(0.72 0.15 85 / 0.6)",
    score: 173,
    rank: 2,
    isJericho: true,
    reigningChampion: true,
    categories: [
      { label: "Athletics", score: 50, max: 100 },
      { label: "Academics", score: 58, max: 100 },
      { label: "Arts", score: 65, max: 100 },
    ],
    logo: "https://nsa.edu/wp-content/uploads/2024/01/jericho-logo.png",
  },
  {
    name: "Ashdown",
    shortName: "ASH",
    color: "oklch(0.65 0.18 25)",
    bgColor: "oklch(0.16 0.04 25)",
    borderColor: "oklch(0.65 0.18 25 / 0.4)",
    score: 149,
    rank: 3,
    categories: [
      { label: "Athletics", score: 50, max: 100 },
      { label: "Academics", score: 29, max: 100 },
      { label: "Arts", score: 70, max: 100 },
    ],
    logo: "https://nsa.edu/wp-content/uploads/2024/01/ashdown-logo.png",
  },
];

function AnimatedNumber({ target, visible }: { target: number; visible: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(Math.round(increment * step), target));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, target]);

  return <span>{current.toLocaleString()}</span>;
}

export default function ScoreboardSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const maxScore = Math.max(...hallData.map((h) => h.score));

  return (
    <section
      id="scoreboard"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url("https://private-us-east-1.manuscdn.com/sessionFile/XuGELq3Rli4UJ25IeT1Tvk/sandbox/ag2R57aqi1ZTllfSafSLCx-img-3_1771993119000_na1fn_amVyaWNoby1zY29yZWJvYXJkLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWHVHRUxxM1JsaTRVSjI1SWVUMVR2ay9zYW5kYm94L2FnMlI1N2FxaTFaVGxsZlNhZlNMQ3gtaW1nLTNfMTc3MTk5MzExOTAwMF9uYTFmbl9hbVZ5YVdOb2J5MXpZMjl5WldKdllYSmtMV0puLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qayLnBUmxB65RK2SRmCZxJ1AOeQ5yKVmKjJtQeRngzt8KsGuPUzzLELZCm2~G97Iofttm8chtzmn9F~3heUhcOBcAMHRxawIpfh3gJA86RlyXUEfrhUgujYn5pEqmdW4I9MOCRsAaGWGhcs-sUh0eEzUZOabEysj5Vy4YtE4Wkl3pZSSosOqTh9aGKP2if0IgqcWG7bXOMMdhryueur-TBGiTAN0clCzpG2gylMNgWc5ufMyIVDsWsRpoPkyqwkMJ0WtNsxH1JrKVGkoKln2wXUjgnzU9P01dW4mqPywSPZnMleVU85HZU4AxeNSEaUxX1jpZZLr6fL9RkCRM3K-eg__")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[oklch(0.08_0.04_148/0.88)]" />

      <div className="relative z-10 container">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="section-label mb-4 tracking-[0.4em]">2025–26 Academic Year</p>
          <div className="gold-rule max-w-xs mx-auto mb-6" />
          <h2
            className="display-heading text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Hall <span className="gold-text">Standings</span>
          </h2>
          <p
            className="text-[oklch(0.70_0.04_85)] text-lg italic max-w-xl mx-auto"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            The three halls of NSA compete throughout the year in athletics, arts, and academics for the NSA Cup.
          </p>
        </div>

        {/* Scoreboard cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {hallData.map((hall, i) => (
            <div
              key={hall.name}
              className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Rank badge */}
              {hall.reigningChampion && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1 text-[0.65rem] tracking-[0.2em]"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    background: "oklch(0.72 0.15 85)",
                    color: "oklch(0.12 0.04 148)",
                  }}
                >
                  ◆ REIGNING CHAMPION ◆
                </div>
              )}

              <div
                className={`relative p-6 h-full overflow-hidden ${hall.isJericho ? "shadow-[0_0_30px_oklch(0.72_0.15_85/0.2)]" : ""}`}
                style={{
                  background: hall.bgColor,
                  border: `1px solid ${hall.borderColor}`,
                }}
              >
                {/* Faint logo background */}
                {hall.logo && (
                  <img
                    src={hall.logo}
                    alt={`${hall.name} logo`}
                    className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none"
                  />
                )}
                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Hall name and rank */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p
                      className="text-xs tracking-[0.2em] mb-1"
                      style={{ fontFamily: "'Cinzel', serif", color: "oklch(0.60 0.04 85)" }}
                    >
                      RANK #{hall.rank}
                    </p>
                    <h3
                      className="text-2xl font-bold"
                      style={{
                        fontFamily: "'Cinzel', serif",
                        color: hall.color,
                      }}
                    >
                      {hall.name}
                    </h3>
                  </div>
                  <div
                    className="text-4xl font-black"
                    style={{ fontFamily: "'Cinzel', serif", color: hall.color, opacity: 0.15 }}
                  >
                    {hall.name === "Malta" ? "I" : hall.name === "Jericho" ? "II" : "III"}
                  </div>
                </div>

                {/* Total score */}
                <div className="mb-6">
                  <p
                    className="text-4xl font-bold"
                    style={{ fontFamily: "'Cinzel', serif", color: hall.color }}
                  >
                    <AnimatedNumber target={hall.score} visible={visible} />
                  </p>
                  <p
                    className="text-xs tracking-[0.15em] mt-1"
                    style={{ fontFamily: "'Cinzel', serif", color: "oklch(0.55 0.04 85)" }}
                  >
                    TOTAL POINTS
                  </p>
                </div>

                {/* Progress bar */}
                <div className="mb-6 h-1.5 bg-[oklch(0.25_0.04_148)] overflow-hidden">
                  <div
                    className="h-full transition-all duration-1500 ease-out"
                    style={{
                      width: visible ? `${(hall.score / maxScore) * 100}%` : "0%",
                      background: hall.color,
                      transitionDelay: `${i * 120 + 300}ms`,
                    }}
                  />
                </div>

                {/* Category breakdown */}
                <div className="space-y-3">
                  {hall.categories.map((cat) => (
                    <div key={cat.label}>
                      <div className="flex justify-between mb-1">
                        <span
                          className="text-[0.65rem] tracking-[0.12em]"
                          style={{ fontFamily: "'Cinzel', serif", color: "oklch(0.55 0.04 85)" }}
                        >
                          {cat.label}
                        </span>
                        <span
                          className="text-[0.65rem]"
                          style={{ fontFamily: "'Cinzel', serif", color: hall.color }}
                        >
                          {cat.score}
                        </span>
                      </div>
                      <div className="h-0.5 bg-[oklch(0.22_0.04_148)]">
                        <div
                          className="h-full transition-all duration-1000 ease-out"
                          style={{
                            width: visible ? `${(cat.score / cat.max) * 100}%` : "0%",
                            background: `${hall.color}`,
                            opacity: 0.6,
                            transitionDelay: `${i * 120 + 500}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-8 text-[oklch(0.45_0.04_85)] text-sm italic"
          style={{ fontFamily: "'Crimson Text', serif" }}
        >
          * Scores are updated to latest official standings
        </p>
      </div>
    </section>
  );
}
