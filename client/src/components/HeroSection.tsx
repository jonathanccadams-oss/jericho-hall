/* HeroSection — Hero banner with video background and dark green filter overlay */
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(0.6)",
        }}
      >
        <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/ECjlVZjibPWHuJRp.mp4" type="video/mp4" />
      </video>

      {/* Dark green filter overlay with fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.04_148/0.75)] via-[oklch(0.10_0.04_148/0.6)] to-[oklch(0.12_0.04_148/0.95)]" />

      {/* Radial fade at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, oklch(0.08 0.04 148 / 0.5) 100%)`,
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Eagle with glow */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-[oklch(0.72_0.15_85/0.15)] blur-3xl scale-[1.5]" />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/gGuAwFrhQMrnGWpz.png"
              alt="Jericho Hall Eagle"
              className="relative w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_20px_oklch(0.72_0.15_85/0.3)]"
              style={{ filter: "brightness(1.2) saturate(1.1)", opacity: 0.95 }}
            />
          </div>
        </div>

        {/* Label */}
        <p className="section-label mb-4 tracking-[0.4em]">
          New Saint Andrews College
        </p>

        {/* Main heading */}
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-black gold-text mb-2 leading-none"
          style={{ fontFamily: "'Cinzel Decorative', 'Cinzel', serif" }}
        >
          JERICHO
        </h1>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-normal text-[oklch(0.93_0.02_85)] tracking-[0.5em] mb-8"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          HALL
        </h2>

        {/* Gold rule with diamond */}
        <div className="diamond-divider max-w-xs mx-auto mb-8">
          <span className="text-[oklch(0.72_0.15_85)] text-xs">◆</span>
        </div>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl text-[oklch(0.80_0.04_85)] mb-3 italic"
          style={{ fontFamily: "'Crimson Text', serif" }}
        >
          "So the people shouted when the priests blew the trumpets."
        </p>
        <p className="section-label tracking-[0.3em] mb-10">
          — Joshua 6:20
        </p>

        {/* Champion badge */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["NSA Cup 2022–23", "NSA Cup 2023–24", "NSA Cup 2024–25"].map((title) => (
            <span
              key={title}
              className="px-4 py-2 border border-[oklch(0.72_0.15_85/0.5)] text-[0.65rem] tracking-[0.15em]"
              style={{
                fontFamily: "'Cinzel', serif",
                color: "oklch(0.72 0.15 85)",
              }}
            >
              {title}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 text-sm tracking-[0.15em] transition-all hover:shadow-lg"
            style={{
              fontFamily: "'Cinzel', serif",
              background: "oklch(0.72 0.15 85)",
              color: "oklch(0.12 0.04 148)",
            }}
          >
            OUR STORY
          </button>
          <button
            onClick={() => document.querySelector("#videos")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 text-sm tracking-[0.15em] border border-[oklch(0.72_0.15_85/0.6)] transition-all hover:bg-[oklch(0.72_0.15_85/0.1)]"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "oklch(0.72 0.15 85)",
            }}
          >
            WATCH VIDEOS
          </button>
        </div>
      </div>
    </section>
  );
}
