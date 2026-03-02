/* Navbar — Dark Collegiate style with gold logo and minimal links */
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Scoreboard", href: "#scoreboard" },
  { label: "Leaders", href: "#leaders" },
  { label: "Videos", href: "#videos" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.12_0.04_148/0.97)] backdrop-blur-md border-b border-[oklch(0.72_0.15_85/0.2)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <img
            src="https://pbs.twimg.com/profile_images/1922143271695818752/U8nGWKfL_400x400.jpg"
            alt="Jericho Hall Crest"
            className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover border border-[oklch(0.72_0.15_85/0.4)] group-hover:border-[oklch(0.72_0.15_85/0.8)] transition-all duration-300"
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-[oklch(0.72_0.15_85)] font-bold tracking-[0.2em] text-sm md:text-base"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              JERICHO
            </span>
            <span
              className="text-[oklch(0.70_0.04_85)] text-[0.6rem] tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Hall
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-[oklch(0.70_0.04_85)] hover:text-[oklch(0.72_0.15_85)] transition-colors duration-200 text-xs tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[oklch(0.72_0.15_85)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[oklch(0.72_0.15_85)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[oklch(0.72_0.15_85)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.14_0.05_148/0.98)] border-t border-[oklch(0.72_0.15_85/0.2)] py-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-6 py-3 text-[oklch(0.70_0.04_85)] hover:text-[oklch(0.72_0.15_85)] hover:bg-[oklch(0.72_0.15_85/0.05)] transition-colors text-xs tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
