/* EventsSection — Upcoming hall events and competition calendar */
import { useEffect, useRef, useState } from "react";

interface Event {
  date: string;
  month: string;
  day: string;
  title: string;
  description: string;
  type: "competition" | "social" | "academic" | "drama";
  location?: string;
}

const events: Event[] = [
  {
    date: "2025-03-07",
    month: "MAR",
    day: "07",
    title: "Hall Declamations — Chalcedon Term",
    description: "Jericho Hall members compete in the inter-hall declamation competition. Come cheer on your hall!",
    type: "competition",
    location: "NSA Main Hall, Moscow, ID",
  },
  {
    date: "2025-03-14",
    month: "MAR",
    day: "14",
    title: "Fireside Chat — Spring Edition",
    description: "The latest installment of Jericho's beloved Fireside Chat series. Updates, announcements, and fellowship.",
    type: "social",
    location: "TBD",
  },
  {
    date: "2025-03-21",
    month: "MAR",
    day: "21",
    title: "Hall Athletics Day",
    description: "Inter-hall athletic competition. Jericho defends its dominance on the field and court.",
    type: "competition",
    location: "NSA Athletic Facilities",
  },
  {
    date: "2025-04-04",
    month: "APR",
    day: "04",
    title: "Jericho Hall Cookout",
    description: "Annual spring cookout for all Jericho Hall members and friends. Food, fellowship, and celebration.",
    type: "social",
    location: "Moscow, Idaho",
  },
  {
    date: "2025-04-18",
    month: "APR",
    day: "18",
    title: "NSA Halls Theater Arts Competition",
    description: "Jericho Hall presents scenes from Shakespeare. Three halls compete for artistic honors.",
    type: "drama",
    location: "NSA Theater, Moscow, ID",
  },
  {
    date: "2025-05-09",
    month: "MAY",
    day: "09",
    title: "End-of-Year NSA Cup Ceremony",
    description: "The annual presentation of the NSA Cup. Will Jericho Hall claim its fourth consecutive championship?",
    type: "competition",
    location: "New Saint Andrews College",
  },
];

const typeColors: Record<Event["type"], { bg: string; text: string; label: string }> = {
  competition: { bg: "oklch(0.72 0.15 85 / 0.15)", text: "oklch(0.72 0.15 85)", label: "Competition" },
  social: { bg: "oklch(0.35 0.12 148 / 0.3)", text: "oklch(0.65 0.12 148)", label: "Social" },
  academic: { bg: "oklch(0.55 0.10 250 / 0.2)", text: "oklch(0.70 0.08 250)", label: "Academic" },
  drama: { bg: "oklch(0.55 0.12 300 / 0.2)", text: "oklch(0.70 0.10 300)", label: "Drama & Arts" },
};

export default function EventsSection() {
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
      id="events"
      ref={ref}
      className="py-24 md:py-32 bg-[oklch(0.12_0.04_148)]"
    >
      <div className="container">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="section-label mb-4 tracking-[0.4em]">Chalcedon Term · 2025</p>
          <div className="gold-rule max-w-xs mx-auto mb-6" />
          <h2
            className="display-heading text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Upcoming <span className="gold-text">Events</span>
          </h2>
          <p
            className="text-[oklch(0.70_0.04_85)] text-lg italic max-w-xl mx-auto"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Competitions, Fireside Chats, social gatherings, and more — the full calendar of Jericho Hall life.
          </p>
        </div>

        {/* Events list */}
        <div className="max-w-4xl mx-auto space-y-4">
          {events.map((event, i) => {
            const typeStyle = typeColors[event.type];
            return (
              <div
                key={i}
                className={`gold-border-card flex gap-6 p-6 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Date block */}
                <div
                  className="flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center border border-[oklch(0.72_0.15_85/0.3)]"
                  style={{ background: "oklch(0.22 0.08 148)" }}
                >
                  <span
                    className="text-[0.6rem] tracking-[0.15em] text-[oklch(0.72_0.15_85)]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {event.month}
                  </span>
                  <span
                    className="text-2xl font-bold text-[oklch(0.93_0.02_85)] leading-none"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {event.day}
                  </span>
                </div>

                {/* Event details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start gap-3 mb-2">
                    <h3
                      className="text-lg font-semibold text-[oklch(0.93_0.02_85)]"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {event.title}
                    </h3>
                    <span
                      className="flex-shrink-0 text-[0.6rem] tracking-[0.12em] px-2 py-0.5"
                      style={{
                        fontFamily: "'Cinzel', serif",
                        background: typeStyle.bg,
                        color: typeStyle.text,
                        border: `1px solid ${typeStyle.text}40`,
                      }}
                    >
                      {typeStyle.label}
                    </span>
                  </div>
                  <p
                    className="text-[oklch(0.70_0.04_85)] text-base leading-relaxed mb-2"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    {event.description}
                  </p>
                  {event.location && (
                    <p
                      className="text-[oklch(0.55_0.04_85)] text-sm"
                      style={{ fontFamily: "'Crimson Text', serif" }}
                    >
                      📍 {event.location}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p
          className="text-center mt-8 text-[oklch(0.45_0.04_85)] text-sm italic"
          style={{ fontFamily: "'Crimson Text', serif" }}
        >
          * Events are illustrative placeholders. Update with official NSA calendar each term.
        </p>
      </div>
    </section>
  );
}
