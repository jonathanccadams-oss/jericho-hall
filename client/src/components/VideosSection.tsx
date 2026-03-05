/* VideosSection — YouTube video embeds from @JerichoTheHall */
import { useEffect, useRef, useState } from "react";

const videos = [
  { id: "zm5XAAUhcCQ", title: "Jericho Hall 🦅", description: "The latest from Jericho Hall — music and spirit.", customThumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663381600658/McHxfACBnOfJfuKp.png" },
  { id: "cCs6T1Eu5TE", title: "Fireside III: Commence Chalcedon", description: "The third Fireside Chat of the Chalcedon Term." },
  { id: "F6ARIr2Ml5E", title: "Chalcedon Declamations", description: "Jericho Hall members deliver powerful declamations." },
  { id: "7Ph3Rt_BiuM", title: "Fireside II: Nicea Notices", description: "Updates and announcements from the Nicea Term." },
  { id: "iYet1Pe5Nm0", title: "Fireside I: Jerusalem Calls!", description: "The first Fireside Chat — Jerusalem Term begins." },
  { id: "z-cJpCmV0Eg", title: "Jericho Drama 2024: A Midsummer Night's Dream", description: "Jericho Hall's full theatrical production." },
];

export default function VideosSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleVideoSelect = (video: typeof videos[0]) => {
    setActiveVideo(video);
    setPlaying(false);
  };

  return (
    <section
      id="videos"
      ref={ref}
      className="py-24 md:py-32 bg-[oklch(0.12_0.04_148)]"
    >
      <div className="container">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="section-label mb-4 tracking-[0.4em]">
            <a
              href="https://www.youtube.com/@JerichoTheHall"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[oklch(0.72_0.15_85)] transition-colors"
            >
              @JerichoTheHall on YouTube
            </a>
          </p>
          <div className="gold-rule max-w-xs mx-auto mb-6" />
          <h2
            className="display-heading text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Hall <span className="gold-text">Videos</span>
          </h2>
          <p
            className="text-[oklch(0.70_0.04_85)] text-lg italic max-w-xl mx-auto"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Fireside Chats, declamations, drama productions, and hall life. Subscribe to our Youtube channel to see the rest of our content.
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Main video player */}
          <div className="max-w-4xl mx-auto mb-8">
            <div
              className="relative w-full overflow-hidden"
              style={{
                border: "1px solid oklch(0.72 0.15 85 / 0.35)",
                boxShadow: "0 0 40px oklch(0.72 0.15 85 / 0.08)",
              }}
            >
              {playing ? (
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                    title={activeVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div
                  className="relative w-full cursor-pointer group"
                  style={{ paddingBottom: "56.25%" }}
                  onClick={() => setPlaying(true)}
                >
                  <img
                    src={(activeVideo as any).customThumbnail || `https://img.youtube.com/vi/${activeVideo.id}/maxresdefault.jpg`}
                    alt={activeVideo.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if ((activeVideo as any).customThumbnail && img.src === (activeVideo as any).customThumbnail) {
                        img.src = `https://img.youtube.com/vi/${activeVideo.id}/maxresdefault.jpg`;
                      } else if (img.src.includes('maxresdefault')) {
                        img.src = `https://img.youtube.com/vi/${activeVideo.id}/sddefault.jpg`;
                      } else if (img.src.includes('sddefault')) {
                        img.src = `https://img.youtube.com/vi/${activeVideo.id}/hqdefault.jpg`;
                      } else if (img.src.includes('hqdefault')) {
                        img.src = `https://img.youtube.com/vi/${activeVideo.id}/mqdefault.jpg`;
                      }
                    }}
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-[oklch(0.08_0.04_148/0.4)] group-hover:bg-[oklch(0.08_0.04_148/0.2)] transition-all duration-300" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 border-[oklch(0.72_0.15_85)] bg-[oklch(0.12_0.04_148/0.8)] group-hover:bg-[oklch(0.72_0.15_85)] transition-all duration-300"
                      style={{ boxShadow: "0 0 30px oklch(0.72 0.15 85 / 0.3)" }}
                    >
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8 ml-1 text-[oklch(0.72_0.15_85)] group-hover:text-[oklch(0.12_0.04_148)] transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[oklch(0.08_0.04_148/0.9)] to-transparent">
                    <h3
                      className="text-white text-lg font-semibold"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {activeVideo.title}
                    </h3>
                    <p
                      className="text-[oklch(0.72_0.15_85)] text-sm italic mt-1"
                      style={{ fontFamily: "'Crimson Text', serif" }}
                    >
                      {activeVideo.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => handleVideoSelect(video)}
                className={`relative group overflow-hidden transition-all duration-300 ${
                  activeVideo.id === video.id
                    ? "ring-2 ring-[oklch(0.72_0.15_85)]"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (img.src.includes('hqdefault')) {
                        img.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                      } else if (img.src.includes('mqdefault')) {
                        img.src = `https://img.youtube.com/vi/${video.id}/default.jpg`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-[oklch(0.08_0.04_148/0.3)] group-hover:bg-transparent transition-all duration-200" />
                  {activeVideo.id === video.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[oklch(0.72_0.15_85)]" />
                  )}
                </div>
                <p
                  className="text-[0.6rem] text-left px-1.5 py-1.5 text-[oklch(0.70_0.04_85)] truncate"
                  style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.05em" }}
                >
                  {video.title.replace(" 🦅", "").replace(" 🗣️", "")}
                </p>
              </button>
            ))}
          </div>

          {/* Link to channel */}
          <div className="text-center mt-10">
            <a
              href="https://www.youtube.com/@JerichoTheHall"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn inline-block"
            >
              View All 48 Videos →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
