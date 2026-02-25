/* Footer — Dark collegiate footer with links and hall motto */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.10_0.04_148)] border-t border-[oklch(0.72_0.15_85/0.15)]">
      {/* Top section */}
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/puTdZiuxPRQIFUMR.jpg"
                alt="Jericho Hall Crest"
                className="w-12 h-12 rounded-full object-cover border border-[oklch(0.72_0.15_85/0.4)]"
              />
              <div>
                <p
                  className="text-[oklch(0.72_0.15_85)] font-bold tracking-[0.2em] text-sm"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  JERICHO HALL
                </p>
                <p
                  className="text-[oklch(0.55_0.04_85)] text-[0.6rem] tracking-[0.25em]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  EST. MMXXI
                </p>
              </div>
            </div>
            <p
              className="text-[oklch(0.60_0.04_85)] text-base leading-relaxed italic"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Reigning Hall of New Saint Andrews College. Three-time NSA Cup Champions. Fortis et Fidelis.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="section-label mb-5 tracking-[0.25em]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Navigate
            </p>
            <div className="gold-rule mb-5" />
            <ul className="space-y-3">
              {[
                { label: "About Jericho Hall", href: "#about" },
                { label: "Hall Standings", href: "#scoreboard" },
                { label: "Hall Leaders", href: "#leaders" },
                { label: "Videos", href: "#videos" },
                { label: "Gallery", href: "#gallery" },
                { label: "Upcoming Events", href: "#events" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-[oklch(0.60_0.04_85)] hover:text-[oklch(0.72_0.15_85)] transition-colors text-sm"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & NSA */}
          <div>
            <p
              className="section-label mb-5 tracking-[0.25em]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Connect
            </p>
            <div className="gold-rule mb-5" />
            <ul className="space-y-3">
              {[
                { label: "YouTube — @JerichoTheHall", href: "https://www.youtube.com/@JerichoTheHall", external: true },
                { label: "Instagram — @jericho_hall", href: "https://www.instagram.com/jericho_hall/", external: true },
                { label: "New Saint Andrews College", href: "https://nsa.edu", external: true },
                { label: "NSA Hall System", href: "https://nsa.edu/students/halls", external: true },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-[oklch(0.60_0.04_85)] hover:text-[oklch(0.72_0.15_85)] transition-colors text-sm"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    {link.label} {link.external && "↗"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[oklch(0.72_0.15_85/0.1)]">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[oklch(0.45_0.04_85)] text-sm"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            © {currentYear} Jericho Hall · New Saint Andrews College · Moscow, Idaho
          </p>
          <div className="diamond-divider max-w-[120px]">
            <span className="text-[oklch(0.45_0.04_85)] text-[0.6rem] whitespace-nowrap" style={{ fontFamily: "'Cinzel', serif" }}>
              FORTIS ET FIDELIS
            </span>
          </div>
          <p
            className="text-[oklch(0.45_0.04_85)] text-sm italic"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            "Shout, for the Lord has given you the city."
          </p>
        </div>
      </div>
    </footer>
  );
}
