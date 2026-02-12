import Connect from "@/components/Connect";
import Echo from "@/components/Echo";
import Explore from "@/components/Explore";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Journal from "@/components/Journal";
import Quiz from "@/components/Quiz";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  return (
    <div className="min-h-full overflow-clip">
      <Hero />
      <Features />
      <Explore />
      <Echo />
      <Quiz />
      <Journal />
      <Connect />
    </div>
  );
};

export default Home;
