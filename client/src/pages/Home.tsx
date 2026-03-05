/* =============================================================================
   JERICHO HALL — Home Page
   Design: Dark Collegiate "Fortis et Fidelis"
   Sections: Hero, About, Scoreboard, Hall Leaders, Videos, Gallery, Events, Footer
   ============================================================================= */

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScoreboardSection from "@/components/ScoreboardSection";
import HallLeadersSection from "@/components/HallLeadersSection";
import VideosSection from "@/components/VideosSection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ScoreboardSection />
      <HallLeadersSection />
      <EventsSection />
      <VideosSection />
      <GallerySection />
      <Footer />
    </div>
  );
}
