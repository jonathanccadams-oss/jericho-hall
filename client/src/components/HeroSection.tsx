/* HeroSection — Full-bleed dark hero with crest, gold display type, and dramatic imagery */
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
      style={{
        backgroundImage: `url("https://private-us-east-1.manuscdn.com/sessionFile/XuGELq3Rli4UJ25IeT1Tvk/sandbox/ag2R57aqi1ZTllfSafSLCx-img-1_1771993120000_na1fn_amVyaWNoby1oZXJvLWJhbm5lcg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWHVHRUxxM1JsaTRVSjI1SWVUMVR2ay9zYW5kYm94L2FnMlI1N2FxaTFaVGxsZlNhZlNMQ3gtaW1nLTFfMTc3MTk5MzEyMDAwMF9uYTFmbl9hbVZ5YVdOb2J5MW9aWEp2TFdKaGJtNWxjZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Xv9D74l08d-7QFILke-a9OXFVUrRGSv-xuRBfox6kQmW-wdRAQlBKDNUJ1sXU~R7sFU9f2lWFp6J6-vYZcmpnBPKV9~8-o8WarWoCc4pUdspvT07jaw~lZiD8hm8J9cE4AUDrxome5nFLEDh-C6MZJ~x0Dm~SVhJxaEVkJY~eF06cb0ZBPzWSnYEafzW3IICBf-lIig5mOAfMgJvFelMGGsA~d9o4NfAlC1adt7-Mt088706dnJfMfWch2jaz7vx07zcWEeqc~7TmxshDhNkzBH5wbEEk1D5B2eX90o9uKC1nyxkCE-ORX1tsG6HnISuY5BfzoHoBqpTcYLXORh7SQ__")`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.04_148/0.75)] via-[oklch(0.10_0.04_148/0.6)] to-[oklch(0.12_0.04_148/0.95)]" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Crest with glow */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[oklch(0.72_0.15_85/0.2)] blur-2xl scale-[2]" />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/puTdZiuxPRQIFUMR.jpg"
              alt="Jericho Hall Crest"
              className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-[oklch(0.72_0.15_85/0.7)] shadow-[0_0_50px_oklch(0.72_0.15_85/0.4)]"
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
              className="px-4 py-1.5 border border-[oklch(0.72_0.15_85/0.5)] text-[oklch(0.72_0.15_85)] text-xs tracking-[0.15em]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {title}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="gold-btn"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Our Story
          </button>
          <button
            className="ghost-btn"
            onClick={() => document.querySelector("#videos")?.scrollIntoView({ behavior: "smooth" })}
          >
            Watch Videos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="section-label text-[0.6rem] tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[oklch(0.72_0.15_85)] to-transparent" />
      </div>
    </section>
  );
}
