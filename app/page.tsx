import Features from "@/components/Features";
import Hero from "@/components/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  return (
    <div className="min-h-full overflow-clip">
      <Hero />
      <Features />
      <div className="h-dvh" />
    </div>
  );
};

export default Home;
