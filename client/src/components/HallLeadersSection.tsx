/* HallLeadersSection — Carousel of Hall Leaders by year with slide animations */
import { useEffect, useRef, useState } from "react";

const leadersByYear = [
  {
    year: "2026-2027",
    leaders: [
      {
        name: "Jack Landis",
        title: "Head of Jericho Hall",
        role: "Our Fearless Leader",
        description:
          "Jack Landis leads Jericho Hall with vision and direction, stewarding the hall's activities, competitions, and community life throughout the academic year.",
        image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/mOXDvnsZGhcEKhVA.jpeg",
      },
      {
        name: "Bengt Anderson",
        title: "Assistant Hall Leader",
        role: "Second in Command",
        description:
          "Bengt Anderson assists in coordinating hall events and inter-hall competitions, and mentors younger members of the hall community.",
        image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/NWYlvkfaqpbzBYdr.webp",
      },
      {
        name: "Lola Griffith",
        title: "Hall Treasurer",
        role: "Finance & Administration",
        description:
          "Lola Griffith manages the hall's finances, records, and administrative operations, ensuring smooth coordination of all hall activities and events.",
        image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/NAYUYBhZXIhXVvpE.jpeg",
      },
    ],
  },
  {
    year: "2025-2026",
    leaders: [
      {
        name: "George Owen",
        title: "Head of Jericho Hall",
        role: "Our Fearless Leader",
        description:
          "Our fearless leader, George Owen guides Jericho Hall with vision and direction, stewarding the hall's activities, competitions, and community life throughout the academic year.",
        image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/aiUetAeOPZWHdeFL.png",
      },
      {
        name: "Jonathan Adams",
        title: "Assistant Hall Leader",
        role: "Second in Command",
        description:
          "Jonathan Adams assists in coordinating hall events and inter-hall competitions, and has built rocket parts that have gone to space. Website manager.",
        image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/pUfbRyCqpIyNHGtm.jpg",
      },
      {
        name: "Laura Cochran",
        title: "Hall Treasurer",
        role: "Finance & Administration",
        description:
          "Laura Cochran manages the hall's finances, records, and administrative operations, ensuring smooth coordination of all hall activities and events.",
        image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/XBnhMYVIMvdCXyYS.jpg",
      },
    ],
  },
];

export default function HallLeadersSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const goToPrevious = () => {
    setSlideDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? leadersByYear.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSlideDirection("right");
    setCurrentIndex((prev) => (prev === leadersByYear.length - 1 ? 0 : prev + 1));
  };

  const currentYear = leadersByYear[currentIndex];

  return (
    <section
      id="leaders"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "oklch(0.15 0.06 148)",
      }}
    >
      <style>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .carousel-slide-enter {
          animation: slideInFromRight 0.6s ease-out forwards;
        }
        .carousel-slide-enter-left {
          animation: slideInFromLeft 0.6s ease-out forwards;
        }
      `}</style>

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("https://private-us-east-1.manuscdn.com/sessionFile/XuGELq3Rli4UJ25IeT1Tvk/sandbox/ag2R57aqi1ZTllfSafSLCx-img-2_1771993115000_na1fn_amVyaWNoby1oYWxsLWxlYWRlcnMtYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWHVHRUxxM1JsaTRVSjI1SWVUMVR2ay9zYW5kYm94L2FnMlI1N2FxaTFaVGxsZlNhZlNMQ3gtaW1nLTJfMTc3MTk5MzExNTAwMF9uYTFmbl9hbVZ5YVdOb2J5MW9ZV3hzTFd4bFlXUmxjbk10WW1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=k9xChFP8p5-xm94bJ7ozSyc-cCklHOAxy4-JA1jMrSyvupBNfnljoAyw9tw6LksGhJ7WjJdf1nkarZukRkZg7khka5h3FTAxYb2AWHKszm0X9H0ScwqTj9Wn-Y6HI3q1VhsSYA5u~ySYM6LckH3ZqGeR-DovQefdbi-4e4GZk5MhMSVMKp-Yb39c0deJIHhlT08qNNaJyfNg4h~E8q0ej08UG1FaAfEcXEaH1Eo3xRSSff0mmWbjt0ROkTHkcRpLtbkxermdub7iCZMjVyYNwb2fRyst5STN~g73Fc3oEKpSaN282IpUi-pG6wwEdU1OBJxM8ea2M3ew4v2pbrEfWw__")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 container">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="section-label mb-4 tracking-[0.4em]">Academic Year</p>
          <div className="gold-rule max-w-xs mx-auto mb-6" />
          <h2
            className="display-heading text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Hall <span className="gold-text">Leaders</span>
          </h2>
          <p
            className="text-[oklch(0.70_0.04_85)] text-lg italic max-w-xl mx-auto"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            The team that leads Jericho Hall in competition, fellowship, and the pursuit of excellence.
          </p>
        </div>

        {/* Year label */}
        <div className="text-center mb-8">
          <p
            className="text-2xl font-bold gold-text transition-all duration-300"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {currentYear.year}
          </p>
        </div>

        {/* Carousel container */}
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {/* Previous button */}
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: "oklch(0.72 0.15 85 / 0.2)",
              color: "oklch(0.72 0.15 85)",
              border: "2px solid oklch(0.72 0.15 85 / 0.4)",
            }}
            aria-label="Previous year"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Leader cards */}
          <div className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto flex-1 ${slideDirection === "right" ? "carousel-slide-enter" : "carousel-slide-enter-left"}`}>
            {currentYear.leaders.map((leader, i) => (
              <div
                key={i}
                className={`gold-border-card p-8 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Avatar with real photo */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center border-2 border-[oklch(0.72_0.15_85/0.4)] bg-[oklch(0.22_0.08_148)] overflow-hidden"
                    style={{ boxShadow: "0 0 20px oklch(0.72 0.15 85 / 0.1)" }}
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover scale-125"
                      style={{
                        objectPosition: i === 0 ? "30% center" : i === 1 ? "50% 40%" : "50% 35%",
                      }}
                    />
                  </div>
                </div>

                {/* Role badge */}
                <p className="section-label text-[0.6rem] mb-2 tracking-[0.2em]">
                  {leader.role}
                </p>

                {/* Name */}
                <h3
                  className="text-xl font-bold text-[oklch(0.93_0.02_85)] mb-1"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {leader.name}
                </h3>

                {/* Title */}
                <p
                  className="gold-text text-sm italic mb-5"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  {leader.title}
                </p>

                {/* Thin gold rule */}
                <div className="gold-rule mb-5" />

                {/* Description */}
                <p
                  className="text-[oklch(0.70_0.04_85)] text-base leading-relaxed"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  {leader.description}
                </p>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: "oklch(0.72 0.15 85 / 0.2)",
              color: "oklch(0.72 0.15 85)",
              border: "2px solid oklch(0.72 0.15 85 / 0.4)",
            }}
            aria-label="Next year"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {leadersByYear.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setSlideDirection(i > currentIndex ? "right" : "left");
                setCurrentIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-[oklch(0.72_0.15_85)] w-8" : "bg-[oklch(0.72_0.15_85/0.3)]"
              }`}
              aria-label={`Go to year ${leadersByYear[i].year}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
