/* HallLeadersSection — Three Hall Leaders with dark green velvet card backgrounds */
import { useEffect, useRef, useState } from "react";

const leaders = [
  {
    name: "George Owen",
    title: "Head of Jericho Hall",
    role: "Primary Leader",
    description:
      "Our fearless leader, George Owen guides Jericho Hall with vision and direction, stewarding the hall's activities, competitions, and community life throughout the academic year.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/TFtAMlndDYdOuAUm.jpg",
  },
  {
    name: "Jonathan Adams",
    title: "Assistant Hall Leader",
    role: "Second in Command",
    description:
      "Jonathan Adams assists in coordinating hall events, managing inter-hall competitions, and mentoring younger members of the hall community.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/TmwbIOYBaUfDlHSA.jpg",
  },
  {
    name: "Laura Cochran",
    title: "Hall Treasurer",
    role: "Finance & Administration",
    description:
      "Laura Cochran manages the hall's finances, records, and administrative operations, ensuring smooth coordination of all hall activities and events.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/EjZEMAAlRBDzLWyV.jpg",
  },
];

export default function HallLeadersSection() {
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

  return (
    <section
      id="leaders"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "oklch(0.15 0.06 148)",
      }}
    >
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
          <p className="section-label mb-4 tracking-[0.4em]">2024–25 Academic Year</p>
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
            The men and women who lead Jericho Hall in competition, fellowship, and the pursuit of excellence.
          </p>
        </div>

        {/* Leader cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, i) => (
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
                    className="w-full h-full object-cover"
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
      </div>
    </section>
  );
}
