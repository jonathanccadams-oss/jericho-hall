/* GallerySection — Instagram photo gallery from @jericho_hall */
import { useEffect, useRef, useState } from "react";

const galleryImages = [
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/mwKBGhvBdRhzUAgr.jpg",
    caption: "Jericho Hall volleyball — green and gold on the court",
    tag: "Athletics",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/TvqFbWMjcXbKuHBH.jpg",
    caption: "Jericho's Christmas Party — fellowship and celebration",
    tag: "Events",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/zhOAQCoJycvqcQzw.jpg",
    caption: "Jericho's Christmas Party invitation — December 6th",
    tag: "Events",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/GKXdliRXWTcSMaZc.jpg",
    caption: "Hall cookout — community and good food",
    tag: "Fellowship",
  },
  // NSA campus images for additional gallery content
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    caption: "Classical education at New Saint Andrews College",
    tag: "Academic",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    caption: "Collegiate tradition and community",
    tag: "Community",
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && lightbox !== null) setLightbox((lightbox + 1) % galleryImages.length);
      if (e.key === "ArrowLeft" && lightbox !== null) setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 md:py-32 bg-[oklch(0.14_0.05_148)]"
    >
      <div className="container">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="section-label mb-4 tracking-[0.4em]">
            <a
              href="https://www.instagram.com/jericho_hall/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[oklch(0.72_0.15_85)] transition-colors"
            >
              @jericho_hall on Instagram
            </a>
          </p>
          <div className="gold-rule max-w-xs mx-auto mb-6" />
          <h2
            className="display-heading text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Hall <span className="gold-text">Gallery</span>
          </h2>
          <p
            className="text-[oklch(0.70_0.04_85)] text-lg italic max-w-xl mx-auto"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Life inside Jericho Hall — athletics, events, fellowship, and the pursuit of excellence.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative group cursor-pointer overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setLightbox(i)}
            >
              <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                <img
                  src={img.src}
                  alt={img.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[oklch(0.08_0.04_148/0)] group-hover:bg-[oklch(0.08_0.04_148/0.6)] transition-all duration-300" />
                {/* Gold border on hover */}
                <div className="absolute inset-0 border border-[oklch(0.72_0.15_85/0)] group-hover:border-[oklch(0.72_0.15_85/0.5)] transition-all duration-300" />
                {/* Caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span
                    className="text-[0.6rem] tracking-[0.15em] text-[oklch(0.72_0.15_85)] block mb-1"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {img.tag}
                  </span>
                  <p
                    className="text-white text-sm leading-tight"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    {img.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram link */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/jericho_hall/"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn inline-block"
          >
            Follow on Instagram →
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-[oklch(0.05_0.02_148/0.95)] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].caption}
              className="w-full max-h-[80vh] object-contain border border-[oklch(0.72_0.15_85/0.3)]"
            />
            <p
              className="text-center mt-4 text-[oklch(0.70_0.04_85)] italic"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              {galleryImages[lightbox].caption}
            </p>
            {/* Navigation */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-[oklch(0.72_0.15_85)] text-3xl hover:text-white transition-colors"
              onClick={() => setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length)}
            >
              ‹
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-[oklch(0.72_0.15_85)] text-3xl hover:text-white transition-colors"
              onClick={() => setLightbox((lightbox + 1) % galleryImages.length)}
            >
              ›
            </button>
            <button
              className="absolute top-0 right-0 -translate-y-8 text-[oklch(0.72_0.15_85)] hover:text-white transition-colors text-xl"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
