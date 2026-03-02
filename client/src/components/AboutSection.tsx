/* AboutSection — Jericho Hall origin story with Battle of Jericho illustration */
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-[oklch(0.12_0.04_148)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative overflow-hidden">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/XuGELq3Rli4UJ25IeT1Tvk/sandbox/ag2R57aqi1ZTllfSafSLCx-img-4_1771993122000_na1fn_amVyaWNoby1hYm91dC1pbWFnZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWHVHRUxxM1JsaTRVSjI1SWVUMVR2ay9zYW5kYm94L2FnMlI1N2FxaTFaVGxsZlNhZlNMQ3gtaW1nLTRfMTc3MTk5MzEyMjAwMF9uYTFmbl9hbVZ5YVdOb2J5MWhZbTkxZEMxcGJXRm5aUS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cBcWxGPWwnWCij-AKabjZ7r5JpHtPngdgfnrbg59GoaOJ5IXKDY7S74z-5F8sKLuBEEtycDoNREmSIZFqaXU9xnOsqc6Sd7zvaeK0Id5aWWOBK3Hv7ollNdAxvMeRlBMLoA68vx2nFvyxFomeRZB~0RKn5qpqOWSEcfWyTyiQRv4Ym1QQBOUaRm8PInXKHkB3mWd8BnD9vx6HEFjR1fJkkonsYxzO6QjUfOi7mbJQVrcYXVMzQmwurdtxDUeyOCo0665Df8FS4d6NJOolQlzNMmZ3r-OMA-Unk1UrYWq5a2pTo8hDvBLysOnBpZXS16K-mHrIs0O3aJ-fDV8SsIJlw__"
                alt="The Battle of Jericho"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Gold border frame */}
              <div className="absolute inset-0 border border-[oklch(0.72_0.15_85/0.4)] pointer-events-none" />
              <div className="absolute inset-2 border border-[oklch(0.72_0.15_85/0.15)] pointer-events-none" />
            </div>
            <p
              className="mt-3 text-center text-[oklch(0.60_0.04_85)] text-sm italic"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              The Fall of Jericho — Joshua 6
            </p>
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <p className="section-label mb-4">Est. MMXXI</p>
            <div className="gold-rule mb-6" />
            <h2
              className="display-heading text-4xl md:text-5xl mb-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The Hall of<br />
              <span className="gold-text">Valor</span>
            </h2>

            <div
              className="space-y-5 text-[oklch(0.80_0.04_85)] leading-relaxed text-lg"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              <p>
                Jericho Hall takes its name from one of the most dramatic victories in sacred history — the Battle of Jericho, recorded in the sixth chapter of the Book of Joshua. God commanded His people to march in faith, and when they shouted, the walls fell.
              </p>
              <p>
                Founded in 2021 as one of three halls at New Saint Andrews College, Jericho Hall exists to cultivate self-government, leadership, and excellence among its members. The halls compete throughout the academic year in athletics, arts, and academics — and Jericho has answered the call.
              </p>
              <blockquote className="border-l-2 border-[oklch(0.72_0.15_85/0.6)] pl-5 my-6 italic text-[oklch(0.72_0.15_85)]">
                "Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go." -Joshua 1:9
              </blockquote>
              <p>
                Three consecutive NSA Cup victories stand as testament to the character forged within Jericho Hall — not merely in competition, but in the daily discipline of classical Christian formation.
              </p>
            </div>

            <div className="mt-8 flex gap-8">
              <div>
                <p
                  className="text-4xl font-bold gold-text"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  3×
                </p>
                <p className="section-label text-[0.65rem] mt-1">NSA Cup Champions</p>
              </div>
              <div className="w-px bg-[oklch(0.72_0.15_85/0.2)]" />
              <div>
                <p
                  className="text-4xl font-bold gold-text"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  2021
                </p>
                <p className="section-label text-[0.65rem] mt-1">Year Founded</p>
              </div>
              <div className="w-px bg-[oklch(0.72_0.15_85/0.2)]" />
              <div>
                <p
                  className="text-4xl font-bold gold-text"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  NSA
                </p>
                <p className="section-label text-[0.65rem] mt-1">Moscow, Idaho</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
